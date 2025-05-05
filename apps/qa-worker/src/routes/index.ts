import { Router } from 'express';
import { generateQA } from '../controller/generate-qa';

const router = Router();
router.post('/generate-qa/:projectId', generateQA);

export default router;