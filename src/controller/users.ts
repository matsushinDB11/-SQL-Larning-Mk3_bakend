import {Interactor} from "../usecase/users/endpoint"
import express from "express";
import {AddInput, GetInput} from "../usecase/users/input";
import HttpStatusCodes from "../domain/httpStatusCodes";
import ErrorToHttpStatus from "./errorToHttpStatus";
import {Failure, Success} from "../errorTypes/resultType";
const http = new HttpStatusCodes();

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
            res.status(ErrorToHttpStatus(data.value)).json(data.value);
        } else {
            res.status(http.StatusOK()).json(data.value);
        }
    }
    async Add(req: express.Request, res: express.Response) {
        const name = req.body.name;
        const email = req.body.email;
        const input: AddInput = {
            name: name,
            email: email
        }
        const re = await this.interactor.Add(input)
        if (re.isFailure()) {
            res.status(ErrorToHttpStatus(re.value)).json(re.value);
        } else {
            res.status(http.StatusNoContent());
        }
    }
}
