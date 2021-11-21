import { jwt, Repository, verifyOutPut } from "../../domain/authenticator";
import { Failure, Result, Success } from "../../errorHelper/resultType";
import axios from "axios";
import { InternalServerError } from "../../errorHelper/errors";

// 開発環境用Authenticator
export default class DevAuthenticatorInfra implements Repository {
    // Google id_token の検証に google-auth-library の代わりに tokeninfo endpoint を用いる
    VerifyGoogleIdToken = async (
        id_token: string
    ): Promise<Result<verifyOutPut, Error>> => {
        const endpoint = "https://oauth2.googleapis.com/tokeninfo";
        try {
            const verifyRes = await axios.post(endpoint, {
                params: {
                    id_token: id_token,
                },
            });
            const userEmail = verifyRes.data.email;
            const res: verifyOutPut = {
                userID: userEmail,
            };
            return new Success(res);
        } catch (e) {
            // 開発環境なのでログ出力する
            console.error(e);
            return new Failure(
                new InternalServerError("verify Google id_token")
            );
        }
    };

    // 開発環境用なので jwt の secret をハードコーディングしている
    GenerateJwt(userID: string, isAdmin: boolean): Promise<Result<jwt, Error>> {
        return Promise.resolve(undefined);
    }
}
