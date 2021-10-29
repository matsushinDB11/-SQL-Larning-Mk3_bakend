import {Repository} from "../../domain/employees/repository";
import {getList} from "./logic";
import {convertListOutput, ListOutput} from "./output";
import {PrismaClient} from "@prisma/client";

export type Interactor = {
    GetList():ListOutput
}

export class usecaseEmployee implements Interactor{
   private readonly repository: Repository;
   private readonly prisma: PrismaClient
   constructor(repository: Repository, prisma: PrismaClient){
        this.repository = repository;
        this.prisma = prisma;
   }
    GetList(): ListOutput {
        const data = getList(this.prisma ,this.repository);
        return convertListOutput(data);
    }
}
