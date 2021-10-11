import express from "express";
import router from './routes/index';

const app = express();
app.use('/',router);

/**
   * @swagger
   * /:
   *   get:
   *     description: Returns the homepage
   *     responses:
   *       200:
   *         description: swagger-jsdoc test
   */
 app.get('/', (req, res) => {
  res.send('This is SQL-Learning-MK3 test')
})

// 3000ポートで受信
const port = process.env.PORT || 3000;

// APIサーバ起動
app.listen(port);
console.log('Express WebApi listening on port ' + port);