import express from 'express';
import usersRouter from './users';
import employeesRouter from "./employees";
import {Service} from "../di/di";

// const router = express.Router();

// v1以下のルーティング
export default function createRoutes(router:express.Router, s:Service):express.Router {
    router.use('/employees', employeesRouter(router, s));
    // employeesRouter(router, s)
    router.use('/users', usersRouter);
    return router
}

// export default router;
