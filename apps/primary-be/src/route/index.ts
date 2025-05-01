import { Router } from "express";
import { createProject } from "../controller";
import { AuthMiddleware } from "../middleware/auth-middleware";

const router = Router();

router.post('/new-project', AuthMiddleware, createProject);

export default router;