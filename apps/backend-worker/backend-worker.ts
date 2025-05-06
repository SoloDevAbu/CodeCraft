import { Job, Worker } from "bullmq";
import { WorkerAgent, WorkerType } from "@repo/ai";
import { prisma } from "@repo/db";
import { JOB_TYPES, QUEUE_NAMES } from "@repo/queue";

new Worker(QUEUE_NAMES.BACKEND, async (job: Job) => {
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

  const worker = WorkerAgent.getInstance(WorkerType.BACKEND);
  const response = await worker.generateTextResponse(userPrompt);

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
})
.on("completed", job => console.log(`Backend job ${job.id} completed`))
.on("failed", (job, err) => console.error(`Backend job ${job?.id} failed:`, err));