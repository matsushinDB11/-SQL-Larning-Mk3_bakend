import express from "express";
import {Interactor} from "../usecase/employees/endpoint";

export class employees {
    private interactor:Interactor;
    constructor(interactor: Interactor) {
        this.interactor = interactor;
    }
    GetList(res: express.Response){
        // res.json(({ userId: "U001", userName: "XXX xxx" }));
        const data = this.interactor.GetList();
        res.json(data);
    }
}
