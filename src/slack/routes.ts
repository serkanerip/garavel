import { Router } from 'express';
import {SlackController} from "./controller/SlackController";

const routes: [string, Router][] = [
    ['/slack', SlackController]
]

export default routes;