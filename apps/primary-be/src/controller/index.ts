import { Request, Response } from "express";
import { prisma } from "@repo/db";
import { projectQueueProcessor } from "@repo/queue";

export const createProject = async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const userId = req.user.id;

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        if(!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        if(!name) {
            return res.status(400).json({
                success: false,
                message: 'Project name is required'
            });
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
        });
        
        const queue = await projectQueueProcessor(project.id, description);

        console.log("Project queue created", queue);
        
        return res.status(201).json({
            status: 'success',
            message: 'Project Created Successfully',
            data: project
        });
    } catch (error) {
        console.error("Error creating project:", error);
        return res.status(500).json({
            success: false,
            message: (error as Error).message
        });
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