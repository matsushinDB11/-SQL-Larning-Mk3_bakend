import { Interactor } from "../usecase/login/endpoint";
import { Response } from "express";
import { LoginInput } from "../usecase/login/input";
import ErrorToHttpStatus from "./errorToHttpStatus";
import HttpStatusCodes from "../domain/httpStatusCodes";
import { RequestBodyType } from "./controllerInterface";

const http = new HttpStatusCodes();

export class loginController {
    protected interacotr: Interactor;
    constructor(interactor: Interactor) {
        this.interacotr = interactor;
    }
    Login(req: RequestBodyType<LoginInput>, res: Response) {
        const id_token: string = req.body.id_token;
        const input: LoginInput = {
            id_token: id_token,
        };
        this.interacotr
            .Login(input)
            .then((data) => {
                if (data.isFailure()) {
                    const errorStatus = ErrorToHttpStatus(data.value);
                    res.status(errorStatus).json(data.value);
                } else {
                    const jwt = data.value.token;
                    res.set("token", jwt)
                        .cookie("token", jwt, { httpOnly: true })
                        .status(http.StatusCreated())
                        .send();
                }
            })
            .catch(() => {
                res.status(http.StatusInternalServerError()).send();
            });
    }
}
