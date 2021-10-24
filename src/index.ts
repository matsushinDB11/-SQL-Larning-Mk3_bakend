import express from "express";
import createRoutes from './routes/index';
import {Service} from "./di/di";

const app = express();
const router = express.Router();

const service = new Service();
app.use('/',createRoutes(app, service));
/**
   * @swagger
   * /:
   *   get:
   *     description: Returns the homepage
   *     responses:
   *       200:
   *         description: swagger-jsdoc test
   */
 app.get('/', (req:express.Request, res:express.Response) => {
  res.send('This is SQL-Learning-MK3 test')
})

// 3000ポートで受信
const port = process.env.PORT || 3000;

// APIサーバ起動
app.listen(port);
console.log('Express WebApi listening on port ' + port);
