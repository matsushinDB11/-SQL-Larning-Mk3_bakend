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
    GetList(req: express.Request, res: express.Response) {
        this.interactor.GetList().then((data) => {
            res.status(200).json(data);
        }).catch(()=>{
            res.status(500).send()
        })
    }
    Get(req: express.Request, res: express.Response) {
        const stringParam = req.params.id;
        const input: GetInput = {
            userID: Number(stringParam)
        };
        this.interactor.Get(input).then((data)=> {
            if (data.isFailure()) {
                res.status(ErrorToHttpStatus(data.value)).json(data.value);
            } else {
                res.status(http.StatusOK()).json(data.value);
            }
        }).catch(()=>{
            res.status(500).send()
        })
    }
    Add(req: express.Request, res: express.Response) {
        const name: string = req.body.name;
        const email: string = req.body.email;
        const input: AddInput = {
            name: name,
            email: email
        }
        this.interactor.Add(input).then((re) => {
            if (re.isFailure()) {
                res.status(ErrorToHttpStatus(re.value)).json(re.value);
            } else {
                res.status(http.StatusCreated()).send();
            }
        }).catch(()=>{
            res.status(500).send()
        })
    }
    Update = (req: express.Request, res: express.Response) => {
        const stringId = req.params.id;
        const email:string = req.body.email;
        const name:string = req.body.name;
        const input: UpdateInput = {
            userID: Number(stringId),
            email: email,
            name: name
        }
        this.interactor.Update(input).then((re)=> {
            if (re.isFailure()) {
                res.status(ErrorToHttpStatus(re.value)).json(re.value);
            } else {
                res.status(http.StatusCreated()).send();
            }
        }).catch(()=>{
            res.status(500).send()
        })
    }
    Delete = (req: express.Request, res: express.Response) => {
        const stringId:string = req.params.id;
        const input: DeleteInput = {
            userID: Number(stringId)
        }
        this.interactor.Delete(input).then((re) => {
            if (re.isFailure()) {
                res.status(ErrorToHttpStatus(re.value)).json(re.value);
            } else {
                res.status(http.StatusNoContent()).send();
            }
        }).catch(()=>{
            res.status(500).send()
        });
    }
}
