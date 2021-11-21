import {
    jwtOutput,
    jwtPayload,
    Repository,
    verifyOutPut,
} from "../../domain/authenticator";
import { Failure, Result, Success } from "../../errorHelper/resultType";
import axios, { AxiosResponse } from "axios";
import { InternalServerError } from "../../errorHelper/errors";
import * as jwt from "jsonwebtoken";

// 開発環境用Authenticator
export default class DevAuthenticatorInfra implements Repository {
    // Google id_token の検証に google-auth-library の代わりに tokeninfo endpoint を用いる
    VerifyGoogleIdToken = async (
        id_token: string
    ): Promise<Result<verifyOutPut, Error>> => {
        type verifyResType = {
            email: string;
        };
        interface customAxiosRes<T> extends AxiosResponse {
            data: T;
        }
        const endpoint = "https://oauth2.googleapis.com/tokeninfo";
        try {
            const verifyRes: customAxiosRes<verifyResType> = await axios.get(
                endpoint,
                {
                    params: {
                        id_token: id_token,
                    },
                }
            );
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
    GenerateJwt(userID: string, isAdmin: boolean): Result<jwtOutput, Error> {
        const payload: jwtPayload = {
            email: userID,
            isAdmin: isAdmin,
        };
        try {
            const token: jwtOutput = {
                token: jwt.sign(payload, "devJwtSecret"),
            };
            return new Success(token);
        } catch (e) {
            console.error(e);
            return new Failure(new InternalServerError("create jwt"));
        }
    }
}
