import { usersController } from "../controller/users";
import { usersUsecase } from "../usecase/users/endpoint";
import UsersInfra from "../infra/repository/users";
import PrismaInfra from "../infra/repository/PrismaInfra";

export function CreateUsersController(): usersController {
    const i = new usersUsecase(new UsersInfra(), new PrismaInfra());
    return new usersController(i);
}
