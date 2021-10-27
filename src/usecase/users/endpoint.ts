import {ListOutput} from "./output";
import {PrismaInterface as Prisma} from "../../domain/prisma";

export type Interactor = {
    GetList(): ListOutput
}

export class usersUsecase implements Interactor {
    GetList(): ListOutput {
        return
    }
}
