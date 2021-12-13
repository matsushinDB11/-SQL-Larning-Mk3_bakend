import { Failure, Result, Success } from "../../errorHelper/resultType";
import {
    convertGetOutput,
    convertListOutput,
    ListOutput,
    question,
} from "./output";
import { Repository } from "../../domain/questions";
import { DBClient } from "../../domain/DBClient";
import { get, getList, getSqlite } from "./logic";
import { GetInput, GetSqliteInput } from "./input";

export type Interactor = {
    GetList(): Promise<Result<ListOutput, Error>>;
    Get(input: GetInput): Promise<Result<question, Error>>;
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
    async Get(input: GetInput): Promise<Result<question, Error>> {
        const data = await get(this.dbClient, this.repository, input);
        if (data.isFailure()) {
            return new Failure(data.value);
        }
        const getSqliteInput: GetSqliteInput = {
            fileName: data.value.sqliteFileName,
        };
        const sqliteBase64 = getSqlite(this.repository, getSqliteInput);
        if (sqliteBase64.isFailure()) {
            return new Failure(sqliteBase64.value);
        } else {
            return new Success(
                convertGetOutput(data.value, sqliteBase64.value)
            );
        }
    }
}
