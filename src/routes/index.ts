import express from "express";
import usersRouter from "./users";
import { Service } from "../di/di";
import loginRouter from "./login";

// v1以下のルーティング
export default function createRoutes(
    app: express.Express,
    s: Service
): express.Router {
    const router = express.Router();
    router.use("/users", usersRouter(s));
    router.use("/login", loginRouter(s));
    return router;
}
