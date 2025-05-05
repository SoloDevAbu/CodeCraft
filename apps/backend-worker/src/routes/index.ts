import { Router } from 'express';
import { generateBackend } from '../controller/generate-backend';

const router = Router();
router.post('/generate-backend/:projectId', generateBackend);

export default router;