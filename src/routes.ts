import { Application, Router } from 'express';
import clickupRoutes from './clickup/routes';
import slackRoutes from './slack/routes';

const _routes: [string, Router][] = [];

_routes.push(...clickupRoutes);
_routes.push(...slackRoutes);

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
