import { LoginInput } from "./input";
import { Failure, Result, Success } from "../../errorHelper/resultType";
import { convertLoginUsecaseOutput, jwt } from "./output";
import { Repository as usersRepository } from "../../domain/users";
import { Repository as authRepository } from "../../domain/authenticator";
import { DBClient } from "../../domain/DBClient";
import { login } from "./logic";

export type Interactor = {
    Login(input: LoginInput): Promise<Result<jwt, Error>>;
};

export class loginUsecase implements Interactor {
    private readonly usersRepository: usersRepository;
    private readonly authRepository: authRepository;
    private readonly dbClient: DBClient;
    constructor(
        userRepository: usersRepository,
        authRepository: authRepository,
        dbClient: DBClient
    ) {
        this.usersRepository = userRepository;
        this.authRepository = authRepository;
        this.dbClient = dbClient;
    }
    Login = async (input: LoginInput): Promise<Result<jwt, Error>> => {
        const resLogin = await login(
            this.dbClient,
            this.authRepository,
            this.usersRepository,
            input
        );
        if (resLogin.isFailure()) {
            return new Failure(resLogin.value);
        }
        return new Success(convertLoginUsecaseOutput(resLogin.value));
    };
}
