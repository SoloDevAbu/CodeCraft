import { Job, Worker } from "bullmq";
import { WorkerAgent, WorkerType } from "@repo/ai";
import { prisma } from "@repo/db";
import { JOB_TYPES, qaQueue, QUEUE_NAMES } from "@repo/queue";
import IORedis from "ioredis";
import { ArtifactProcessor, onFileUpdate, onShellCommand } from "@repo/processor";

const connection = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379', {
  maxRetriesPerRequest: null,
  enableReadyCheck: false
});

new Worker(QUEUE_NAMES.BACKEND, 
  async (job: Job) => {
    console.log("Backend worker started", job.id, job.name);
  if (job.name !== JOB_TYPES.GENERATE_BACKEND) {
    return;
  }

  const { projectId, userPrompt } = job.data;

  console.log("Manager roadmap for backend", userPrompt);

  const project = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
  });

  if (!project) {
    console.log("Project not found");
    throw new Error(`Project ${projectId} not found`);
  }
  const history = await prisma.backendPrompt.findMany({
    where: {
      projectId,
    },
    orderBy: {
      createdAt: "asc",
    },
    select: {
      managerPrompt: true,
      responseContent: true,
    }
  });

  // const formattedHistory = history.map(item => ({
  //   role: "user",
  //   content: JSON.stringify(item.managerPrompt),
  // })).concat(history.map(item => ({
  //   role: "assistant",
  //   content: JSON.stringify(item.responseContent),
  // })));
  
  const worker = WorkerAgent.getInstance(WorkerType.BACKEND);
  const response = await worker.generateTextResponse(userPrompt, JSON.stringify(history));

  console.log("Backend response", response);
  
  let artifactProcessor = new ArtifactProcessor('', onFileUpdate, onShellCommand);
  let artifact = '';

  for await (const chunk of response) {
    console.log("Chunk", chunk);
    artifactProcessor.append(chunk);
    artifactProcessor.parse();

    artifact += chunk;
  }
  await prisma.backendPrompt.create({
    data: {
      prompt: userPrompt,
      responseContent: response,
      createdAt: new Date(),
      updatedAt: new Date(),
      projectId: project.id,
      type: "SYSTEM",
    },
  });


  await qaQueue.add(
    JOB_TYPES.GENERATE_QA,
    {
      projectId,
      llmResponse: response,
    },
    {
      jobId: `${projectId}-qa`,
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 1000,
      },
    }
  )
}, {
  connection
})
.on("completed", job => console.log(`Backend job ${job.id} completed`))
.on("failed", (job, err) => console.error(`Backend job ${job?.id} failed:`, err));