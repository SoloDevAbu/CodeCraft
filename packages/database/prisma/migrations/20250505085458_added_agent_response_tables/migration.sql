-- CreateEnum
CREATE TYPE "ManagerPromptType" AS ENUM ('USER', 'SYSTEM');

-- CreateEnum
CREATE TYPE "FrontendPromptType" AS ENUM ('MANAGER', 'SYSTEM', 'USER');

-- CreateEnum
CREATE TYPE "BackendPromptType" AS ENUM ('MANAGER', 'SYSTEM', 'USER');

-- CreateEnum
CREATE TYPE "QAPromptType" AS ENUM ('MANAGER', 'SYSTEM', 'USER');

-- AlterTable
ALTER TABLE "ManagerResponse" ADD COLUMN     "content" TEXT,
ADD COLUMN     "prompt" TEXT,
ADD COLUMN     "type" "ManagerPromptType",
ALTER COLUMN "frontendRoadMap" DROP NOT NULL,
ALTER COLUMN "backendRoadMap" DROP NOT NULL,
ALTER COLUMN "qaRoadmap" DROP NOT NULL;

-- CreateTable
CREATE TABLE "FrontendPrompt" (
    "id" TEXT NOT NULL,
    "prompt" TEXT,
    "managerPrompt" JSONB,
    "responseContent" TEXT,
    "type" "FrontendPromptType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "FrontendPrompt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BackendPrompt" (
    "id" TEXT NOT NULL,
    "prompt" TEXT,
    "managerPrompt" JSONB,
    "responseContent" TEXT,
    "type" "BackendPromptType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "BackendPrompt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QAPrompt" (
    "id" TEXT NOT NULL,
    "prompt" TEXT,
    "content" JSONB,
    "responseContent" TEXT,
    "type" "QAPromptType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "QAPrompt_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FrontendPrompt" ADD CONSTRAINT "FrontendPrompt_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BackendPrompt" ADD CONSTRAINT "BackendPrompt_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QAPrompt" ADD CONSTRAINT "QAPrompt_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
