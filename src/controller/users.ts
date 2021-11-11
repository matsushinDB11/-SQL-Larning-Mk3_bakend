import {Interactor} from "../usecase/users/endpoint"
import express from "express";
import {AddInput, DeleteInput, GetInput, UpdateInput} from "../usecase/users/input";
import HttpStatusCodes from "../domain/httpStatusCodes";
import ErrorToHttpStatus from "./errorToHttpStatus";
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
        const name: string = req.body.name;
        const email: string = req.body.email;
        const input: AddInput = {
            name: name,
            email: email
        }
        const re = await this.interactor.Add(input)
        if (re.isFailure()) {
            res.status(ErrorToHttpStatus(re.value)).json(re.value);
        } else {
            res.status(http.StatusCreated()).send();
        }
    }
    Update = async (req: express.Request, res: express.Response) => {
        const stringId = req.params.id;
        const email:string = req.body.email;
        const name:string = req.body.name;
        const input: UpdateInput = {
            userID: Number(stringId),
            email: email,
            name: name
        }
        const re = await this.interactor.Update(input)
        if (re.isFailure()) {
            res.status(ErrorToHttpStatus(re.value)).json(re.value);
        } else {
            res.status(http.StatusCreated()).send();
        }
    }
    Delete = async (req: express.Request, res: express.Response) => {
        const stringId:string = req.params.id;
        const input: DeleteInput = {
            userID: Number(stringId)
        }
        const re = await this.interactor.Delete(input);
        if (re.isFailure()) {
            res.status(ErrorToHttpStatus(re.value)).json(re.value);
        } else {
            res.status(http.StatusNoContent()).send();
        }
    }
}
