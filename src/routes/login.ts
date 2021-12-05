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
     *      consumes:
     *       - application/json
     *      parameters:
     *      -   in: body
     *          name: body
     *          description: Google auth id_token
     *          required: true
     *          schema:
     *             type: object
     *             properties:
     *              id_token:
     *                   type: string
     *                   description: Google認証のid_token
     *      responses:
     *          201:
     *              description: Success
     *              headers:
     *                  Set-Cookie:
     *                      description: Access token by jwt
     *                      schema:
     *                          type: string
     *                          example: token=hogehoge
     *                  token:
     *                      description: フロント側でのユーザー情報取得用jwt
     *                      schema:
     *                          type: string
     */
    return router;
};

export default loginRouter;
