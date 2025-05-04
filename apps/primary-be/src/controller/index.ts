import { Request, Response } from "express";
import { prisma } from "@repo/db";
import { WorkerAgent } from "@repo/ai";
import { RoadmapSchema } from "@repo/ai";

export const createProject = async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const userId = req.user.id;
    //TODO: get actual history
    const history = ['']

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        if(!user) {
            res.status(404).json({
                success: false,
                message: 'User not found'
            })
            return;
        }

        if(!name) {
            res.status(400).json({
                success: false,
                message: 'Project name is required'
            })
            return;
        }

        const project = await prisma.project.create({
            data: {
                name,
                description,
                status: 'ACTIVE',
                userId,
                createdAt: new Date(),
                updatedAt: new Date(),

            }
        })

        const worker = WorkerAgent.getInstance();

        const response = await worker.generateResponse(description, history, RoadmapSchema);

        console.log('llm response', JSON.stringify(response, null, 2));
        res.status(201).json({
            status: 'success',
            message: 'Project Created Successfully',
            roadMap: response
        })
    } catch (error) {
        console.error("Error creating project:", error);
        res.status(500).json({
            success: false,
            message: (error as Error).message
        })
    }
}

export const getProjects = async (req: Request, res: Response) => {
    const userId = req.user.id;

    try {
        const projects = await prisma.project.findMany({
            where: {
                userId
            }
        })

        res.status(200).json({
            success: true,
            data: projects
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: (error as Error).message
        })
    }
}