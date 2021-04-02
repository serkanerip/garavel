import { Router, Request, Response, NextFunction } from 'express';
import { CommandProcessor } from '../use-cases/command-processor';
export const SlackController: Router = Router();

SlackController.post('/command', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await CommandProcessor(req.body);
    res.status(200).json(response);
  } catch (e) {
    next(e);
  }
});

SlackController.get('/ping', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: 'Pong!' });
  } catch (e) {
    next(e);
  }
});
