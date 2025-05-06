import { Job, Worker } from "bullmq";
import { WorkerAgent, WorkerType } from "@repo/ai";
import { prisma } from "@repo/db";
import { JOB_TYPES, QUEUE_NAMES } from "@repo/queue";
import IORedis from "ioredis";

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
}, {
  connection
})
.on("completed", job => console.log(`Backend job ${job.id} completed`))
.on("failed", (job, err) => console.error(`Backend job ${job?.id} failed:`, err));