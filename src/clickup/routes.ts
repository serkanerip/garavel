import { Router } from 'express';
import {ClickupController} from "./controller/ClickupController";

const routes: [string, Router][] = [
    ['/clickup', ClickupController]
]

export default routes;