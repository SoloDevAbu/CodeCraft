import { Request, Response } from 'express';
import { prisma } from '@repo/db';
import { WorkerAgent, WorkerType } from '@repo/ai';

export const createRoadmap = async (req: Request, res: Response) => {
    const { description } = req.body;
    const { projectId } = req.params;

    try {
        const manager = WorkerAgent.getInstance(WorkerType.MANAGER);
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

        const history = await prisma.managerResponse.findMany({
            where: {
                projectId
            }
        })

        const managerResponse = await manager.generateResponse(description, history);
        console.log('llm response', managerResponse);
        const managerPrompt = await prisma.managerResponse.create({
            data: {
                content: description,
                frontendRoadMap: managerResponse.projectRoadmap.frontend,
                backendRoadMap: managerResponse.projectRoadmap.backend,
                qaRoadmap: managerResponse.projectRoadmap.qa,
                createdAt: new Date(),
                updatedAt: new Date(),
                projectId: project.id,
                type: 'SYSTEM',
            }
        })

        res.status(200).json({
            success: true,
            message: 'Roadmap created successfully',
            data: managerPrompt
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: (error as Error).message
        })
    }
}