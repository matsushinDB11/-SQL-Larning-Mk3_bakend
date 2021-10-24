import {Repository} from "../../domain/employees/repository";
import {getList} from "./logic";
import {convertListOutput, ListOutput} from "./output";

export type Interactor = {
    GetList():ListOutput
}

export class usecaseEmployee implements Interactor{
   private readonly repository: Repository;
   constructor(repository: Repository){
        this.repository = repository;
        //tx
   }
    GetList(): ListOutput {
        const data = getList(this.repository);
        return convertListOutput(data);
    }
}
