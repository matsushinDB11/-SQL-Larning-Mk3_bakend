import {convertListOutput, ListOutput,} from "./output";
import {PrismaInterface as Prisma} from "../../domain/prisma";
import {Repository} from "../../domain/users";
import {getList} from "./logic";

export type Interactor = {
    GetList(): ListOutput
}

export class usersUsecase implements Interactor {
    private readonly repository: Repository;
    private readonly prisma: Prisma
    constructor(repository: Repository, prisma: Prisma) {
        this.repository = repository;
        this.prisma = prisma
    }
    GetList(): ListOutput {
        const data = getList(this.prisma, this.repository);
        return convertListOutput(data);
    }
}
