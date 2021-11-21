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
