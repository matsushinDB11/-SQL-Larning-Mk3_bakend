import { DBClient } from "../../domain/DBClient";
import { question, Repository } from "../../domain/questions";
import { Failure, Result, Success } from "../../errorHelper/resultType";
import { GetInput, GetSqliteInput } from "./input";

const getList = async (
    dbClient: DBClient,
    questionsRepo: Repository
): Promise<Result<question[], Error>> => {
    const data = await questionsRepo.GetList(dbClient);
    if (data.isFailure()) {
        return new Failure(data.value);
    } else {
        return new Success(data.value);
    }
};

const get = async (
    dbClient: DBClient,
    questionsRepo: Repository,
    input: GetInput
): Promise<Result<question, Error>> => {
    const data = await questionsRepo.Get(dbClient, input.questionID);
    if (data.isFailure()) {
        return new Failure(data.value);
    } else {
        return new Success(data.value);
    }
};

const getSqlite = (questionsRepo: Repository, input: GetSqliteInput) => {
    const data = questionsRepo.GetSqliteFile(input.fileName);
    if (data.isFailure()) {
        return new Failure(data.value);
    } else {
        return new Success(data.value);
    }
};

export { getList, get, getSqlite };
