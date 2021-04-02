import { Application, Router} from 'express';
import clickupRoutes from './clickup/routes';

const _routes: [string, Router][] = []

_routes.push(...clickupRoutes);

export const routes = (app: Application) => {
    _routes.forEach((route) => {
        const [url, controller] = route
        app.use(url, controller)
    })
}