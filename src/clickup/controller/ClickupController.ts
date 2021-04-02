import {Router, Request, Response, NextFunction} from 'express'
import GetTasks from "../use-cases/get-tasks";
export const ClickupController: Router = Router();

ClickupController.get('/tasks/:status', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await GetTasks({
            teamId: 2170485,
            parameters: {
                statuses: [req.params.status.replace('_', '')]
            }
        });
        res.status(200).json(response);
    } catch (e) {
        next(e);
    }
});

ClickupController.get('/ping', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).send({data: 'Pong!'})
    } catch (e) {
        next(e);
    }
});