import express from "express";

const router = express.Router();

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
router.get('/',((req: express.Request, res:express.Response) =>{
    res.status(200).json({ userId: "U001", userName: "XXX xxx" });
} ))

export default router;
