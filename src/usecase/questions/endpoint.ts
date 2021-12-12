import { Failure, Result, Success } from "../../errorHelper/resultType";
import { convertListOutput, ListOutput } from "./output";
import { Repository } from "../../domain/questions";
import { DBClient } from "../../domain/DBClient";
import { getList } from "./logic";

export type Interactor = {
    GetList(): Promise<Result<ListOutput, Error>>;
};

export class questionUsecase implements Interactor {
    private readonly repository: Repository;
    private readonly dbClient: DBClient;
    constructor(repository: Repository, dbClient: DBClient) {
        this.repository = repository;
        this.dbClient = dbClient;
    }
    async GetList(): Promise<Result<ListOutput, Error>> {
        const data = await getList(this.dbClient, this.repository);
        if (data.isFailure()) {
            return new Failure(data.value);
        } else {
            return new Success(convertListOutput(data.value));
        }
    }
}
