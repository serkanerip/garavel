import { Router, Request, Response, NextFunction } from 'express';
import { CommandProcessor } from '../use-cases/command-processor';
export const SlackController: Router = Router();
import moment = require('moment');
import { SendDailyReport } from '../use-cases/send-daily-report';

SlackController.post('/command', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await CommandProcessor(req.body);
    res.status(200).json(response);
  } catch (e) {
    next(e);
  }
});

SlackController.post('/jobs/dailyreport', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await SendDailyReport();
    res.status(200).json({ status: 'ok' });
  } catch (e) {
    next(e);
  }
});

SlackController.get('/ping', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const d = moment().endOf('day').unix();
    const endOfDayUnix = moment().endOf('day').unix();
    const startOfDayUnix = moment().startOf('day').unix();
    res.status(200).send({ e: endOfDayUnix, s: startOfDayUnix });
  } catch (e) {
    next(e);
  }
});
