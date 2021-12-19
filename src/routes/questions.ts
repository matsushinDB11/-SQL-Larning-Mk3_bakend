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
     *          tags: [Question]
     *          summary: 問題一覧取得
     *          description: Get questions list
     *          responses:
     *              200:
     *                  description: Success
     *                  content: application/json
     *                  schema:
     *                      $ref: "#/definitions/QuestionList"
     *              404:
     *                  description: Not Found Error
     *                  content: application/json
     *                  schema:
     *                      $ref: "#/definitions/NotFoundError"
     */
    router.get("/:id", (req: Request, res: Response) => {
        s.questions.Get(req, res);
    });
    /**
     * @swagger
     * /questions/:id:
     *  get:
     *      tags: [Question]
     *      summary: 問題詳細取得
     *      description: Get question info
     *      responses:
     *          200:
     *              description: Success
     *              content: application/json
     *              schema:
     *                  $ref: "#/definitions/Question"
     *          404:
     *              description: Not Found Error
     *              content: application/json
     *              schema:
     *                  $ref: "#/definitions/NotFoundError"
     */
    return router;
};

export default questionsRouter;

/**
 * @swagger
 * definitions:
 *  Question:
 *      type: object
 *      properties:
 *          ID:
 *              type: integer
 *          title:
 *              type: string
 *          classID:
 *              type: integer
 *          sqliteBase64:
 *              type: string
 *              description: base64 encoded sqliteFile
 *  QuestionForList:
 *      type: object
 *      properties:
 *          ID:
 *              type: integer
 *          title:
 *              type: string
 *  QuestionList:
 *      type: object
 *      properties:
 *          questions:
 *              type: array
 *              items:
 *                  $ref: "#/definitions/QuestionForList"
 */
