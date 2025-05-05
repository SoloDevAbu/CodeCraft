import { Request, Response } from 'express';
import { prisma } from '@repo/db';
import { WorkerAgent, WorkerType } from '@repo/ai';

export const generateQA = async (req: Request, res: Response) => {
    const { projectId } = req.params;

    try {
        const worker = WorkerAgent.getInstance(WorkerType.QA);
        const project = await prisma.project.findUnique({
            where: {
                id: projectId
            }
        });

        if(!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found'
            });
        }

        const roadmap = await prisma.managerResponse.findUnique({
            where: {
                id: projectId
            },
            select: {
                qaRoadmap: true,
            }
        });

        const history = await prisma.qAPrompt.findMany({
            where: {
                projectId: projectId
            }
        });

        const response = await worker.generateTextResponse(JSON.stringify(roadmap), history);
        console.log('QA agent response', response);

        const qaPrompt = await prisma.qAPrompt.create({
            data: {
                prompt: JSON.stringify(roadmap),
                content: roadmap?.qaRoadmap!,
                responseContent: response,
                createdAt: new Date(),
                updatedAt: new Date(),
                projectId: project.id,
                type: 'SYSTEM',
            }
        });

        res.status(200).json({
            success: true,
            message: 'QA plan generated successfully',
            data: qaPrompt
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: (error as Error).message
        });
    }
}