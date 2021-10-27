import {Prisma} from "../infra/repository/prisma";
import {usersController} from "../controller/users";
import {usersUsecase} from "../usecase/users/endpoint";
import {usersInfra} from "../infra/repository/users";

export function CreateUsersController():usersController {
    const i = new usersUsecase(
        new usersInfra(),
        new Prisma()
    )
    return new usersController(i);
}
