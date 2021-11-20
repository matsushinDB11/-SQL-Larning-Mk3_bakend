import { jwt, Repository, verifyOutPut } from "../../domain/authenticator";
import { Result } from "../../errorHelper/resultType";

export default class DevAuthenticatorInfra implements Repository {
    VerifyGoogleIdToken(
        id_token: string
    ): Promise<Result<verifyOutPut, Error>> {
        return Promise.resolve(undefined);
    }

    GenerateJwt(userID: string, isAdmin: boolean): Promise<Result<jwt, Error>> {
        return Promise.resolve(undefined);
    }
}
