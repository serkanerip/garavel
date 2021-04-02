import {Router, Request, Response, NextFunction} from 'express'
export const ClickupController: Router = Router();

ClickupController.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).send({data: 'Nasıl tak diye buradayım saniyede!'})
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