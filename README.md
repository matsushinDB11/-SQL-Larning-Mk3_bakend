# SQL-Learning Mk3 backend
Mk2のリプレイス版 [Mk2リポジトリ](https://github.com/hisa-lab/SQL-Learning-Public)

- [フロントエンドリポジトリ](https://github.com/matsushinDB11/SQL-Learning-Mk3_Frontend)  
- [バックエンドテスト用リポジトリ](https://github.com/matsushinDB11/SQL-Larning-Mk3_bakend_test)  
  - ※開発初期のテスト実装はこちらで行っている

## DevRequirements  

- node.js 16.13.0
  - nvmの利用を推奨
- yarn 1.22.17
- typescript 4.4.4
- Docker, docker-compose
  - ドキュメント閲覧用のswagger-uiとMySQLの構築用

## 環境変数
.envファイルを設定し、以下の環境変数を各自設定する
- ADMIN_EMAIL 管理者用メールアドレス
- JWT_SECRET 本番環境用 jwtのシークレットキー

## Dev Server
- localhost:3000 開発用サーバー
- localhost:8001 APIドキュメント閲覧

## Available Scripts
In the project directory, you can run:  

### `yarn dev`
開発用サーバー起動  
[nodemon](https://www.npmjs.com/package/nodemon) を用いて変更時にts-nodeをホットリロードする

### `yarn make_doc`
[src/routes](https://github.com/matsushinDB11/SQL-Larning-Mk3_backend/tree/main/src/routes) 以下の@swaggerコメントからswagger.jsonを生成する

### `yarn prisma migrate dev --name {{comment}}`
[prisma/schema.prisma](https://github.com/matsushinDB11/SQL-Larning-Mk3_backend/blob/main/prisma/schema.prisma) からDBテーブルを生成マイグレーションする

### `yarn prisma db seed`
[prisma/seed.ts](https://github.com/matsushinDB11/SQL-Larning-Mk3_backend/blob/main/prisma/seed.ts) から初期データをDBに注入する。
.envファイルで管理者用メールアドレスを設定すること。

### `yarn eslint` `yarn prettier`
各種lint tool を`src/`以下のソースファイル走らせる。
これらはlint-stagedによって`git commit`時にステージングされているソースファイルに対して自動で走る。

### `yarn build`
Jsにトランスパイルして`dist/`以下に出力。
