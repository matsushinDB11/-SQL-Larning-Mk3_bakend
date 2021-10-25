import {Repository} from "../../domain/employees/repository";
import {getList} from "./logic";
import {convertListOutput, ListOutput} from "./output";
import {PrismaInterface as Tx} from "../../domain/prisma";

export type Interactor = {
    GetList():ListOutput
}

export class usecaseEmployee implements Interactor{
   private readonly repository: Repository;
   private readonly tx: Tx
   constructor(repository: Repository, tx: Tx){
        this.repository = repository;
        this.tx = tx;
   }
    GetList(): ListOutput {
        const data = getList(this.tx ,this.repository);
        return convertListOutput(data);
    }
}
