import express from "express";
import {Interactor} from "../usecase/employees/endpoint";

export abstract class abstractEmployeesController {
    protected interactor:Interactor;
    constructor(interactor: Interactor) {
        this.interactor = interactor;
    }
    abstract GetList(res: express.Response):void ;
}

export class employees extends abstractEmployeesController{
    GetList(res: express.Response){
        // res.json(({ userId: "U001", userName: "XXX xxx" }));
        const data = this.interactor.GetList();
        res.json(data);
    }
}
