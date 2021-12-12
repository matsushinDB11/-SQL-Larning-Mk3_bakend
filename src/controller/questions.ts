import { Interactor } from "../usecase/questions/endpoint";
import { Request, Response } from "express";
import ErrorToHttpStatus from "./errorToHttpStatus";
import HttpStatusCodes from "../domain/httpStatusCodes";
const http = new HttpStatusCodes();

class QuestionsController {
    protected interactor: Interactor;
    constructor(interactor: Interactor) {
        this.interactor = interactor;
    }
    GetList(req: Request, res: Response) {
        this.interactor
            .GetList()
            .then((data) => {
                if (data.isFailure()) {
                    return res
                        .status(ErrorToHttpStatus(data.value))
                        .json(data.value);
                } else {
                    return res.status(http.StatusOK()).json(data.value);
                }
            })
            .catch(() => {
                return res.status(http.StatusInternalServerError()).send();
            });
    }
}

export default QuestionsController;
