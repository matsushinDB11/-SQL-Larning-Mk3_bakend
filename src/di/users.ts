import {PrismaClient} from "@prisma/client";
import {usersController} from "../controller/users";
import {usersUsecase} from "../usecase/users/endpoint";
import {usersInfra} from "../infra/repository/users";

export function CreateUsersController():usersController {
    const i = new usersUsecase(
        new usersInfra(),
        new PrismaClient()
    )
    return new usersController(i);
}
