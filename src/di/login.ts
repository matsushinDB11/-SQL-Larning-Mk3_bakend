import { loginController } from "../controller/login";
import { loginUsecase } from "../usecase/login/endpoint";
import AuthenticatorInfra from "../infra/repository/authenticator";
import DevAuthenticatorInfra from "../infra/repository/authenticatorDev";
import UsersInfra from "../infra/repository/users";
import PrismaInfra from "../infra/repository/PrismaInfra";

export const CreateLoginController = (): loginController => {
    if (process.env.NODE_ENV == "production") {
        const i = new loginUsecase(
            new UsersInfra(),
            new AuthenticatorInfra(),
            new PrismaInfra()
        );
        return new loginController(i);
    } else {
        const i = new loginUsecase(
            new UsersInfra(),
            new DevAuthenticatorInfra(),
            new PrismaInfra()
        );
        return new loginController(i);
    }
};
