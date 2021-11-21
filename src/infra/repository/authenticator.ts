import {
    jwtOutput,
    jwtPayload,
    Repository,
    verifyOutPut,
} from "../../domain/authenticator";
import { Failure, Result, Success } from "../../errorHelper/resultType";
import { OAuth2Client } from "google-auth-library";
import * as jwt from "jsonwebtoken";
import keys = require("../../GoogleAuth/apps.googleusercontent.com.json");
import {
    InternalServerError,
    resourceNotFoundError,
} from "../../errorHelper/errors";

export default class AuthenticatorInfra implements Repository {
    VerifyGoogleIdToken = async (
        id_token: string
    ): Promise<Result<verifyOutPut, Error>> => {
        try {
            const oAuth2Client = new OAuth2Client(
                keys.web.client_id,
                keys.web.client_secret
                //keys.web.redirect_uris[0]
            );
            const ticket = await oAuth2Client.verifyIdToken({
                idToken: id_token,
                audience: keys.web.client_id,
            });
            const userEmail = ticket.getUserId();
            if (userEmail == null) {
                return new Failure(
                    new resourceNotFoundError("id_token: " + id_token)
                );
            }
            const res: verifyOutPut = {
                userID: userEmail,
            };
            return new Success(res);
        } catch (e) {
            // TODO 認証失敗とOAth2Clientの取得失敗でエラーハンドリングを分ける
            return new Failure(
                new InternalServerError("verify Google id_token")
            );
        }
    };
    GenerateJwt = (
        userID: string,
        isAdmin: boolean
    ): Result<jwtOutput, Error> => {
        const payload: jwtPayload = {
            email: userID,
            isAdmin: isAdmin,
        };
        try {
            const jwtSecret = String(process.env.JWT_SECRET);
            const token: jwtOutput = {
                token: jwt.sign(payload, jwtSecret),
            };
            return new Success(token);
        } catch (e) {
            return new Failure(new InternalServerError("create jwt"));
        }
    };
}
