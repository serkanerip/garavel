import { GetDailyTasks } from './get-daily-tasks';
import { write } from '../slack-client';

export const SendDailyReport = async () => {
  const dailyTasks = await GetDailyTasks();
  await write('#daily-scrum', dailyTasks);
};
