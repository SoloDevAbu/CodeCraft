import { Router } from 'express';
import { generateFrontend } from '../controller/generate-frontend';

const router = Router();
router.post('/generate-frontend/:projectId', generateFrontend);

export default router;