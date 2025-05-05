import { Router } from 'express';
import { createRoadmap } from '../controller/create-roadmap';

const router = Router();
router.post('/create-roadmap/:projectId', createRoadmap);

export default router;