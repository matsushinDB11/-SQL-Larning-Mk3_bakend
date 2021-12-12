import { Service } from "../di/di";
import express, { Request, Response } from "express";

const questionsRouter = (s: Service): express.Router => {
    const router = express.Router();
    // GET 問題一覧取得
    router.get("/", (req: Request, res: Response) => {
        s.questions.GetList(req, res);
    });
    /**
     * @swagger
     * /questions:
     *      get:
     *          tags:
     */
    return router;
};

export default questionsRouter;
