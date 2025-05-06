import { projectQueue } from "../queue";
import { JOB_TYPES } from "../job-constant/job-types";
import { handleError } from "../utils/logger";

export const projectQueueProcessor = async (projectId: string, description: string) => {
    try {
        const job = await projectQueue.add(JOB_TYPES.CREATE_ROADMAP, {
            projectId,
            userPrompt: description,
        }, {
            jobId: `${projectId}-create-roadmap`,
            attempts: 3,
            backoff: {
                type: "exponential",
                delay: 1000,
            },
        });
        return job;
    } catch (error) {
        handleError(error);
    }
}