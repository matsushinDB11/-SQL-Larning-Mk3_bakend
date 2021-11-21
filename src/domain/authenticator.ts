import { Result } from "../errorHelper/resultType";

export interface Repository {
    VerifyGoogleIdToken(id_token: string): Promise<Result<verifyOutPut, Error>>;
    GenerateJwt(userID: string, isAdmin: boolean): Result<jwtOutput, Error>;
}

export type verifyOutPut = {
    userID: string;
};

export type jwtOutput = {
    token: string;
};

export type jwtPayload = {
    email: string;
    isAdmin: boolean;
};
