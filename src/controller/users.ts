import { Interactor } from "../usecase/users/endpoint";
import express, { Request } from "express";
import {
    AddInput,
    DeleteInput,
    GetInput,
    UpdateInput,
} from "../usecase/users/input";
import HttpStatusCodes from "../domain/httpStatusCodes";
import ErrorToHttpStatus from "./errorToHttpStatus";
import { RequestBodyType } from "./controllerInterface";
const http = new HttpStatusCodes();

export class usersController {
    protected interactor: Interactor;
    constructor(interactor: Interactor) {
        this.interactor = interactor;
    }
    GetList(req: Request, res: express.Response) {
        this.interactor
            .GetList()
            .then((data) => {
                if (data.isFailure()) {
                    res.status(ErrorToHttpStatus(data.value)).json(data.value);
                } else {
                    res.status(http.StatusOK()).json(data.value);
                }
            })
            .catch(() => {
                res.status(http.StatusInternalServerError()).send();
            });
    }
    Get(req: express.Request, res: express.Response) {
        const stringParam = req.params.id;
        const input: GetInput = {
            userID: Number(stringParam),
        };
        this.interactor
            .Get(input)
            .then((data) => {
                if (data.isFailure()) {
                    res.status(ErrorToHttpStatus(data.value)).json(data.value);
                } else {
                    res.status(http.StatusOK()).json(data.value);
                }
            })
            .catch(() => {
                res.status(http.StatusInternalServerError()).send();
            });
    }
    Add(req: RequestBodyType<AddInput>, res: express.Response) {
        const email: string = req.body.email;
        const isAdmin: boolean | undefined = req.body.isAdmin;
        const input: AddInput = {
            email: email,
            isAdmin: isAdmin,
        };
        this.interactor
            .Add(input)
            .then((re) => {
                if (re.isFailure()) {
                    res.status(ErrorToHttpStatus(re.value)).json(re.value);
                } else {
                    res.status(http.StatusCreated()).send();
                }
            })
            .catch(() => {
                res.status(http.StatusInternalServerError()).send();
            });
    }
    Update = (req: RequestBodyType<UpdateInput>, res: express.Response) => {
        const stringId = req.params.id;
        const email: string = req.body.email;
        const isAdmin: boolean | undefined = req.body.isAdmin;
        const input: UpdateInput = {
            userID: Number(stringId),
            email: email,
            isAdmin: isAdmin,
        };
        this.interactor
            .Update(input)
            .then((re) => {
                if (re.isFailure()) {
                    res.status(ErrorToHttpStatus(re.value)).json(re.value);
                } else {
                    res.status(http.StatusCreated()).send();
                }
            })
            .catch(() => {
                res.status(http.StatusInternalServerError()).send();
            });
    };
    Delete = (req: express.Request, res: express.Response) => {
        const stringId: string = req.params.id;
        const input: DeleteInput = {
            userID: Number(stringId),
        };
        this.interactor
            .Delete(input)
            .then((re) => {
                if (re.isFailure()) {
                    res.status(ErrorToHttpStatus(re.value)).json(re.value);
                } else {
                    res.status(http.StatusNoContent()).send();
                }
            })
            .catch(() => {
                res.status(http.StatusInternalServerError()).send();
            });
    };
}
