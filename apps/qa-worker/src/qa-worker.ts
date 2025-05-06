import { Job, Worker } from "bullmq";
import { WorkerAgent, WorkerType } from "@repo/ai";
import { prisma } from "@repo/db";
import { JOB_TYPES, QUEUE_NAMES } from "@repo/queue";
import IORedis from "ioredis";

const connection = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379', {
  maxRetriesPerRequest: null,
  enableReadyCheck: false
});

new Worker(QUEUE_NAMES.QA, 
  async (job: Job) => {
    console.log("QA worker started", job.id, job.name);
  if (job.name !== JOB_TYPES.GENERATE_QA) {
    return;
  }

  const { projectId, llmResponse } = job.data;

  console.log("Manager roadmap for QA", llmResponse,);

  const project = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
  });

  if (!project) {
    console.log("Project not found");
    throw new Error(`Project ${projectId} not found`);
  }
  const history = await prisma.qAPrompt.findMany({
    where: {
      projectId,
    },
    orderBy: {
      createdAt: "asc",
    },
    select: {
      responseContent: true,
    }
  });

  const worker = WorkerAgent.getInstance(WorkerType.QA);
  const response = await worker.generateTextResponse(llmResponse, JSON.stringify(history));

  console.log("QA response", response);

  await prisma.qAPrompt.create({
    data: {
      content: llmResponse,
      responseContent: response,
      createdAt: new Date(),
      updatedAt: new Date(),
      projectId: project.id,
      type: "SYSTEM",
    },
  });
})
.on("completed", job => console.log(`Frontend job ${job.id} completed`))
.on("failed", (job, err) => console.error(`Frontend job ${job?.id} failed:`, err));