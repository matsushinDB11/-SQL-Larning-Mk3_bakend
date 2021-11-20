import { jwt, Repository, verifyOutPut } from "../../domain/authenticator";
import { Result } from "../../errorHelper/resultType";

// 開発環境用Authenticator
export default class DevAuthenticatorInfra implements Repository {
    // Google id_token の検証に google-auth-library の代わりに tokeninfo endpoint を用いる
    VerifyGoogleIdToken(
        id_token: string
    ): Promise<Result<verifyOutPut, Error>> {
        return Promise.resolve(undefined);
    }

    // 開発環境用なので jwt の secret をハードコーディングしている
    GenerateJwt(userID: string, isAdmin: boolean): Promise<Result<jwt, Error>> {
        return Promise.resolve(undefined);
    }
}
