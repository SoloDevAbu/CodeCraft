import { Job, Worker} from "bullmq";
import { WorkerAgent, WorkerType } from "@repo/ai";
import { prisma } from "@repo/db";
import {
  JOB_TYPES,
  QUEUE_NAMES,
  backendQueue
} from "@repo/queue";

new Worker(QUEUE_NAMES.MANAGER, async (job: Job) => {
  if (job.name !== JOB_TYPES.CREATE_ROADMAP) {
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
  const manager = WorkerAgent.getInstance(WorkerType.MANAGER);

  const history = await prisma.managerResponse.findMany({
    where: {
      projectId,
    },
    orderBy: {
         createdAt: 'asc'
    }
  });
  const managerResponse = await manager.generateResponse(userPrompt, history);

  const managerRecord = await prisma.managerResponse.create({
    data: {
      content: userPrompt,
      frontendRoadMap: managerResponse.projectRoadmap.frontend,
      backendRoadMap: managerResponse.projectRoadmap.backend,
      qaRoadmap: managerResponse.projectRoadmap.qa,
      createdAt: new Date(),
      updatedAt: new Date(),
      projectId: project.id,
      type: "SYSTEM",
    },
  });
  console.log("Manager response created", managerRecord);

  await backendQueue.add(
    JOB_TYPES.GENERATE_BACKEND,
    {
      projectId,
      userPrompt: managerResponse.projectRoadmap.backend,
    },
    {
      jobId: `${projectId}-backend`,
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 1000,
      },
    }
  );
})
.on("completed", job => console.log(`Manager job ${job.id} completed`))
.on("failed", (job, err) => console.error(`Manager job ${job?.id} failed:`, err));

