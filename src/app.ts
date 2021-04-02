import { Application } from 'express';
import express = require('express');
import {routes} from "./routes";

// Boot express
export const app: Application = express();

// Application routing
routes(app);
