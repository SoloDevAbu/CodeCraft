import { Request, Response } from 'express';
import { prisma } from '@repo/db';
import { WorkerAgent, WorkerType } from '@repo/ai';

export const generateBackend = async (req: Request, res: Response) => {
    const { projectId } = req.params;

    try {
        const worker = WorkerAgent.getInstance(WorkerType.BACKEND);
        const project = await prisma.project.findUnique({
            where: {
                id: projectId
            }
        })

        if(!project) {
            res.status(404).json({
                success: false,
                message: 'Project not found'
            })
            return;
        }

        const roadmap = await prisma.managerResponse.findUnique({
            where: {
                id: projectId
            },
            select: {
                backendRoadMap: true,
            }
        })
        const history = await prisma.backendPrompt.findMany({
            where: {
                id: projectId
            }
        })

        const response = await worker.generateTextResponse(JSON.stringify(roadmap), history);
        console.log('backend agent response', response);

        const backendPrompt = await prisma.backendPrompt.create({
            data: {
                prompt: JSON.stringify(roadmap),
                managerPrompt: roadmap?.backendRoadMap!,
                responseContent: response,
                createdAt: new Date(),
                updatedAt: new Date(),
                projectId: project.id,
                type: 'SYSTEM',
            }
        })

        res.status(200).json({
            success: true,
            message: 'Backend generated successfully',
            data: backendPrompt
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: (error as Error).message
        })
    }
}