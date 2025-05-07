import { Job, Worker } from "bullmq";
import { WorkerAgent, WorkerType } from "@repo/ai";
import { prisma } from "@repo/db";
import { JOB_TYPES, QUEUE_NAMES } from "@repo/queue";
import { connection } from "@repo/queue";

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
  });

  const formattedHistory = history.map(item => ({
    role: "user",
    content: JSON.stringify(item.content),
  })).concat(history.map(item => ({
    role: "assistant",
    content: JSON.stringify(item.responseContent),
  })));

  const worker = WorkerAgent.getInstance(WorkerType.QA);
  const response = await worker.generateTextResponse(llmResponse, JSON.stringify(formattedHistory));

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