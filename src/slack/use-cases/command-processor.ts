import { SlackBlock, SlackCommandPayload } from '../types';
import { GetDailyTasks } from './get-daily-tasks';

export const CommandProcessor = async (payload: SlackCommandPayload): Promise<SlackBlock> => {
  return await GetDailyTasks();
};
