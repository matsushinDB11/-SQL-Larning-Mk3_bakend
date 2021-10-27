import {Prisma} from "../infra/repository/prisma";
import {usersController} from "../controller/users";
import {usersUsecase} from "../usecase/users/endpoint";

export function CreateUsersController():usersController {
    const i = new usersUsecase(
        // Infra
        // Prisma
    )
    return new usersController(i);
}
