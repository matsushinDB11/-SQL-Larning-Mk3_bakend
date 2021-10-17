import express from "express";
import {employees} from "../controller/employees";
import {Service} from "../di/di";

export default function employeeRouter(router: express.Router,s:Service):express.Router {
/**
 * @swagger
 * /employees:
 *  get:
 *      tags: [employees]
 *      summary: 従業員一覧
 *      response:
 *       200:
 *        description: Success
 *        content: application/json
 */
    router.get('/',s.employees.GetList)
    return router
}

// const router = express.Router();

// router.get('/',employeesController.GetList)

// export default router;
