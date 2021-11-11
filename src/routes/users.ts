import express from 'express';
import {Service} from "../di/di";

export default function usersRouter(s:Service):express.Router {
  const router = express.Router();
  /**
   *  @swagger
   *  /users:
   *    get:
   *      tags: [User]
   *      summary: ユーザー一覧取得
   *      description: Get users list.
   *      response:
   *       200:
   *        description: Success
   *        content: application/json
   */
  // GET 一覧取得
  router.get('/', (req: express.Request, res: express.Response) => {
    // res.status(200).json({ userId: "U001", userName: "Yamada Taro" });
    s.users.GetList(req, res);
  });

  /**
   * @swagger
   * /user/:id:
   *  get:
   *    tags: [User]
   *    summary: ユーザー詳細取得
   *    description: Get user info
   *    parameters:
   *    - name: id
   *      in: path
   *      description: user id to fetch
   *      required: true
   *      schema:
   *        type: number
   *    response:
   *      200:
   *        description: Success
   *        content: application/json
   *      400:
   *        description: Resource not found error
   *        content: application/json
   */
  // Get 詳細取得
  router.get('/:id',(req: express.Request, res: express.Response)=> {
    s.users.Get(req, res);
  })

  /**
   * @swagger
   * /users:
   *    post:
   *      tags:
   *      - User
   *      summary: ユーザー追加
   *      description: Add User
   *      consumes:
   *       - application/json
   *      parameters:
   *      - in: body
   *        name: body
   *        description: Add User Object
   *        required: true
   *        schema:
   *          type: object
   *          properties:
   *           name:
   *            type: string
   *           email:
   *            type: string
   *
   *      requestBody:
   *        content:
   *          'application/json':
   *            schema:
   *              type: object
   *              properties:
   *                name:
   *                  type: string
   *                email:
   *                  type: string
   *      response:
   *       201:
   *        description: Success
   *       400:
   *        description: Bad request
   *       500:
   *        Internal Server Error
   */
  // POSTリクエスト
  router.post('/', (req: express.Request, res: express.Response) => {
    s.users.Add(req, res);
  });
  /**
   * @swagger
   * /users/:id:
   *  put:
   *    tags:
   *    - User
   *    summary: ユーザ情報修正
   *    description: Update User
   *
   *    response:
   *    201:
   *      description: Success
   *    400:
   *      description: Bad request
   *    500:
   *      description: Internal Server Error
   */
  router.put('/:id', (req:express.Request, res:express.Response) => {
    s.users.Update(req, res);
  });

  return router;
}
