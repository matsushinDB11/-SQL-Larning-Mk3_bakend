import { loginController } from "../controller/login";
import { loginUsecase } from "../usecase/login/endpoint";
import AuthenticatorInfra from "../infra/repository/authenticator";
import UsersInfra from "../infra/repository/users";
import PrismaInfra from "../infra/repository/PrismaInfra";

export const CreateLoginController = (): loginController => {
    const i = new loginUsecase(
        new UsersInfra(),
        new AuthenticatorInfra(),
        new PrismaInfra()
    );
    return new loginController(i);
};
