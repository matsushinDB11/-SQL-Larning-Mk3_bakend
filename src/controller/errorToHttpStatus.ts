import { resourceNotFoundError } from "../errorHelper/errors";
import HttpStatusCodes from "../domain/httpStatusCodes";

const http = new HttpStatusCodes();

export default function ErrorToHttpStatus(error: Error): number {
    switch (true) {
        case error instanceof resourceNotFoundError:
            return http.StatusNotFound();
        default:
            return http.StatusInternalServerError();
    }
}
