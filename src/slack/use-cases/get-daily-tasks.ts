import { SlackBlock } from '../types';
import GetTasks from '../../clickup/use-cases/get-tasks';
import moment = require('moment');
import { TasksMessageFormatter } from './tasks-message-formatter';

export const GetDailyTasks = async (): Promise<SlackBlock> => {
  const endOfDayUnix = moment().endOf('day').unix();
  const startOfDayUnix = moment().startOf('day').unix();

  const getTasksResponse = await GetTasks({
    teamId: 2170485,
    parameters: {
      statuses: ['open', 'in progress', 'blocked'],
      due_date_gt: startOfDayUnix * 1000,
      due_date_lt: endOfDayUnix * 1000,
    },
  });

  return TasksMessageFormatter(getTasksResponse.tasks);
};
