import express from 'express';

const router = express.Router();

/**
 *  @swagger
 *  /users:
 *    title: ユーザー
 *    get:
 *      description: Get UserID & Name
 *      response:
 *       200:
 *        description: Success
 *        content: application/json
 */
// GETリクエスト
router.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).json({ userId: "U001", userName: "Yamada Taro" });
});

/**
 * @swagger
 * post:
 *  description: Add User
 *  response:
 *   204:
 *    description: Success
 *   400:
 *    description: Bad request
 */

// POSTリクエスト
router.post('/', (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: "登録しました" });
});

export default router;
