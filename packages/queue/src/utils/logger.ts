import { Logger } from 'tslog';

export const logger = new Logger({name: 'queue'});

export function handleError(error: any) {
    logger.error('Error occurred:', error);
    throw error;
}