import express from "express";
import {Interactor} from "../usecase/users/endpoint"

export class usersController {
    protected interactor: Interactor;
    constructor(interactor: Interactor) {
        this.interactor = interactor;
    }
    async GetList(res: express.Response) {
        const data = await this.interactor.GetList();
        res.json(data);
    }
}
