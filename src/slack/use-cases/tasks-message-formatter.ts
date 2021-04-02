import { Task } from '../../clickup/types';
import { SlackBlock } from '../types';

export const TasksMessageFormatter = (tasks: Task[]): SlackBlock => {
  let message = '';
  tasks.forEach((task) => {
    let taskText = '';
    taskText += `<${task.url}|${task.name}>\n\t*Assignees:*\t`;
    task.assignees.forEach((assignee) => (taskText += ' ' + assignee.username + ','));
    taskText += '\n\t *Status:* ' + task.status.status + ` ${task.status.color}`;
    message += `- ${taskText}\n`;
  });

  return {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: message,
    },
  };
};
