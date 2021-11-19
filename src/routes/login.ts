import { Service } from "../di/di";
import express, { Request, Response, Router } from "express";

const loginRouter = (s: Service): Router => {
    const router = express.Router();
    router.post("/", (req: Request, res: Response) => {
        s.login.Login(req, res);
    });
    return router;
};

export default loginRouter;
