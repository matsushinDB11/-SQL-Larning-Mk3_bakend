import { Interactor } from "../usecase/login/endpoint";
import { Request, Response } from "express";
import { LoginInput } from "../usecase/login/input";
import ErrorToHttpStatus from "./errorToHttpStatus";
import HttpStatusCodes from "../domain/httpStatusCodes";

const http = new HttpStatusCodes();

export class loginController {
    protected interacotr: Interactor;
    constructor(interactor: Interactor) {
        this.interacotr = interactor;
    }
    Login(req: Request, res: Response) {
        const id_token: string = req.body.id_token;
        const input: LoginInput = {
            googleIdToken: id_token,
        };
        this.interacotr
            .Login(input)
            .then((data) => {
                if (data.isFailure()) {
                    const errorStatus = ErrorToHttpStatus(data.value);
                    res.status(errorStatus).json(data.value);
                } else {
                    const jwt = data.value.token;
                    res.status(http.StatusOK()).json({ jwt });
                }
            })
            .catch(() => {
                res.status(http.StatusInternalServerError()).send();
            });
    }
}
