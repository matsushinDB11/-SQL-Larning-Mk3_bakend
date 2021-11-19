import { Result } from "../errorHelper/resultType";

export interface Authenticator {
    VerifyGoogleIdToken(id_token: string): Promise<Result<verifyOutPut, Error>>;
}

export type verifyOutPut = {
    result: boolean;
    userID: string | null;
};
