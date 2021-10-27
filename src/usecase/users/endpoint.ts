import {convertListOutput, ListOutput,} from "./output";
import {PrismaClient} from "@prisma/client";
import {Repository} from "../../domain/users";
import {getList} from "./logic";

export type Interactor = {
    GetList(): ListOutput
}

export class usersUsecase implements Interactor {
    private readonly repository: Repository;
    private readonly prisma: PrismaClient
    constructor(repository: Repository, prisma: PrismaClient) {
        this.repository = repository;
        this.prisma = prisma
    }
    GetList(): ListOutput {
        const data = getList(this.prisma, this.repository);
        return convertListOutput(data);
    }
}
