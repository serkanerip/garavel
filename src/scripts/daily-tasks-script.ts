import { SendDailyReport } from '../slack/use-cases/send-daily-report';

require('dotenv').config();

const run = async () => {
  await SendDailyReport();
};

run();
