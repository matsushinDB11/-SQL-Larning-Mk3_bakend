import { Service } from "../di/di";
import express, { Request, Response, Router } from "express";

const loginRouter = (s: Service): Router => {
    const router = express.Router();
    router.post("/", (req: Request, res: Response) => {
        s.login.Login(req, res);
    });
    /**
     * @swagger
     * /login:
     *  post:
     *      tags:
     *      - Auth
     *      summary: ログイン
     *      description: Login & Get jwt
     *      responses:
     *          201:
     *              description: Success
     *              headers:
     *                  Set-Cookie:
     *                      description: Access token by jwt
     *                      schema:
     *                          type: string
     *                          example: token=hogehoge;
     */
    return router;
};

export default loginRouter;
