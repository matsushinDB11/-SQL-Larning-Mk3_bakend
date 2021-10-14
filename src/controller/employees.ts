import {Service} from "../di/di";
import express from "express";

export class employees {
    GetList(req: express.Request, res: express.Response){
        res.json(({ userId: "U001", userName: "XXX xxx" }));
    }
}
