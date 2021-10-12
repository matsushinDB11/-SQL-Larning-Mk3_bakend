import express from 'express';
import usersRouter from './users';
import employeesRouter from "./employees";

const router = express.Router();

// v1以下のルーティング
router.use('/users', usersRouter);
router.use('/employees', employeesRouter)

export default router;
