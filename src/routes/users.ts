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
  // GETリクエスト
  router.get('/', (req: express.Request, res: express.Response) => {
    // res.status(200).json({ userId: "U001", userName: "Yamada Taro" });
    s.users.GetList().then(r => res.json(r));
  });

  // TODO Getのドキュメント書く
  router.get('/:id',(req: express.Request, res: express.Response)=> {
    s.users.Get(req, res);
  })

  /**
   * @swagger
   * /users:
   *    post:
   *      tags: [User]
   *      summary: ユーザー追加
   *      description: Add User
   *      response:
   *       204:
   *        description: Success
   *       400:
   *        description: Bad request
   */

  // POSTリクエスト
  router.post('/', (req: express.Request, res: express.Response) => {
    res.status(200).json({ message: "登録しました" });
  });
  return router;
}


