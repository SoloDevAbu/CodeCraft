import { Request, Response } from 'express';
import { prisma } from '@repo/db';
import { WorkerAgent, WorkerType } from '@repo/ai';

export const generateFrontend = async (req: Request, res: Response) => {
    const { projectId } = req.params;

    try {
        const worker = WorkerAgent.getInstance(WorkerType.FRONTEND);
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
                frontendRoadMap: true,
            }
        });

        const history = await prisma.frontendPrompt.findMany({
            where: {
                projectId: projectId
            }
        });

        const response = await worker.generateTextResponse(JSON.stringify(roadmap), history);
        console.log('frontend agent response', response);

        const frontendPrompt = await prisma.frontendPrompt.create({
            data: {
                prompt: JSON.stringify(roadmap),
                managerPrompt: roadmap?.frontendRoadMap!,
                responseContent: response,
                createdAt: new Date(),
                updatedAt: new Date(),
                projectId: project.id,
                type: 'SYSTEM',
            }
        });

        res.status(200).json({
            success: true,
            message: 'Frontend code generated successfully',
            data: frontendPrompt
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: (error as Error).message
        });
    }
}