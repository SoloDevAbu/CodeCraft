import { managerQueue } from "../queue";
import { JOB_TYPES } from "../job-constant/job-types";
import { handleError } from "../utils/logger";

export const managerQueueProcessor = async (projectId: string, frontendRoadmap: string) => {
    try {
        const job = await managerQueue.add(JOB_TYPES.GENERATE_BACKEND, {
            projectId,
            frontendRoadmap,
        });
        return job;
    } catch (error) {
        handleError(error);
    }
}