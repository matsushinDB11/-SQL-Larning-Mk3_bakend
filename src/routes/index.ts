import express from 'express';
import usersRouter from './users';
import employeesRouter from "./employees";
import {Service} from "../di/di";

// const router = express.Router();

// v1以下のルーティング
export function createRoutes(router:express.Router, s: () => Service) {
    router.use('/employees', employeesRouter);
    router.use('/users', usersRouter);
}

// export default router;
