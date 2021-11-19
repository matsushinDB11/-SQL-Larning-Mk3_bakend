import { OAuth2Client } from "google-auth-library";
import keys = require("../GoogleAuth/apps.googleusercontent.com.json");
import { Failure, Result, Success } from "../errorHelper/resultType";
import { InternalServerError } from "../errorHelper/errors";

export const verifyIdToken = async (
    idToken: string
): Promise<Result<verifyOutPut, Error>> => {
    try {
        const oAuth2Client = new OAuth2Client(
            keys.web.client_id,
            keys.web.client_secret
            //keys.web.redirect_uris[0]
        );
        const ticket = await oAuth2Client.verifyIdToken({
            idToken: idToken,
            audience: keys.web.client_id,
        });
        const res: verifyOutPut = {
            result: true,
            userID: ticket.getUserId(),
        };
        return new Success(res);
    } catch (e) {
        return new Failure(new InternalServerError("verify Google Id_token"));
    }
};

export type verifyOutPut = {
    result: boolean;
    userID: string | null;
};
