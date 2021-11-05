import {Interactor} from "../usecase/users/endpoint"
import express from "express";
import {GetInput} from "../usecase/users/input";

export class usersController {
    protected interactor: Interactor;
    constructor(interactor: Interactor) {
        this.interactor = interactor;
    }
    async GetList(req: express.Request, res: express.Response) {
        const data = await this.interactor.GetList();
        res.status(200).json(data);
    }
    async Get(req: express.Request, res: express.Response) {
        const stringParam = req.params.id;
        const input: GetInput = {
            userID: Number(stringParam)
        };
        const data = await this.interactor.Get(input);
        if (data.isFailure()) {
            res.status(400).json(data.value);
        } else {
            res.status(200).json(data.value);
        }
    }
}
