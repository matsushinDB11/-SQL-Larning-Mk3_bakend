import { Repository, verifyOutPut } from "../../domain/authenticator";
import { Failure, Result, Success } from "../../errorHelper/resultType";
import { OAuth2Client } from "google-auth-library";
import keys = require("../../GoogleAuth/apps.googleusercontent.com.json");
import { InternalServerError } from "../../errorHelper/errors";

export class AuthenticatorInfra implements Repository {
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
            const res = {
                result: true,
                userID: ticket.getUserId(),
            };
            return new Success(res);
        } catch (e) {
            // TODO 認証失敗とOAth2Clientの取得失敗でエラーハンドリングを分ける
            return new Failure(
                new InternalServerError("verify Google id_token")
            );
        }
    };
}
