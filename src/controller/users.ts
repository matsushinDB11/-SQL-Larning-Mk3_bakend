import express from "express";
import {Interactor} from "../usecase/users/endpoint"

export class usersController {
    protected interactor: Interactor;
    constructor(interactor: Interactor) {
        this.interactor = interactor;
    }
    GetList(res: express.Response){
        const data = this.interactor.GetList();
        res.json(data);
    }
}
