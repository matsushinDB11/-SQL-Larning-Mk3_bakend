import express from "express";
import {employees} from "../controller/employees";

const router = express.Router();
const employeesController = new employees();

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
router.get('/',employeesController.GetList)

export default router;
