import { Repository as authRepository } from "../../domain/authenticator";
import { Repository as userRepository } from "../../domain/users";
import { LoginInput } from "./input";
import { Failure } from "../../errorHelper/resultType";
import { DBClient } from "../../domain/DBClient";

export const login = async (
    dbClient: DBClient,
    authRepo: authRepository,
    userRepo: userRepository,
    input: LoginInput
) => {
    const resVerifyIdToken = await authRepo.VerifyGoogleIdToken(
        input.googleIdToken
    );
    if (resVerifyIdToken.isFailure()) {
        return new Failure(resVerifyIdToken.value);
    }
    const userEmail = resVerifyIdToken.value.userID;
    const resGetUser = await userRepo.GetByEmail(dbClient, userEmail);
    if (resGetUser.isFailure()) {
        return new Failure(resGetUser.value);
    }
    const isAdmin = resGetUser.value.isAdmin;
    if (isAdmin) {
    }
};
