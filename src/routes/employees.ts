import express from "express";
import {Service} from "../di/di";

export default function employeeRouter(s:Service):express.Router {
    const router = express.Router()
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
    router.get('/',(req:express.Request, res:express.Response)=>{
        s.employees.GetList(res)
    })
    return router
}
