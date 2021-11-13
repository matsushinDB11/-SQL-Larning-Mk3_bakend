import express from "express";
import { Interactor } from "../usecase/employees/endpoint";

// export abstract class abstractEmployeesController {
//     abstract GetList(res: express.Response):void ;
// }

export class employees {
    protected interactor: Interactor;
    constructor(interactor: Interactor) {
        this.interactor = interactor;
    }
    GetList(res: express.Response) {
        const data = this.interactor.GetList();
        res.json(data);
    }
}
