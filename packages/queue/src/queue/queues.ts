import IORedis from 'ioredis';
import { Queue } from 'bullmq';
import { QUEUE_NAMES } from '../job-constant/job-types';
import dotenv from 'dotenv';
dotenv.config();

const connection = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379');

export const projectQueue = new Queue(QUEUE_NAMES.PROJECT, { connection });
export const managerQueue = new Queue(QUEUE_NAMES.MANAGER, { connection });
export const backendQueue = new Queue(QUEUE_NAMES.BACKEND, { connection });
export const frontendQueue = new Queue(QUEUE_NAMES.FRONTEND, { connection });
export const qaQueue = new Queue(QUEUE_NAMES.QA, { connection });