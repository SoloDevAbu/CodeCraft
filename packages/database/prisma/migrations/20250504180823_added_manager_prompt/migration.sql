-- CreateTable
CREATE TABLE "ManagerResponse" (
    "id" TEXT NOT NULL,
    "frontendRoadMap" JSONB NOT NULL,
    "backendRoadMap" JSONB NOT NULL,
    "qaRoadmap" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "ManagerResponse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ManagerResponse" ADD CONSTRAINT "ManagerResponse_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
