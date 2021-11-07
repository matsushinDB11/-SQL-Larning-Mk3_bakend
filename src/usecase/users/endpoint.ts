import {convertGetOutput, convertListOutput, ListOutput, user,} from "./output";
import {DBClient} from "../../domain/DBClient";
import {Repository} from "../../domain/users";
import {getList, get} from "./logic";
import {GetInput} from "./input";
import {Failure, Result, Success} from "../../errorTypes/resultType";

export type Interactor = {
    GetList(): Promise<ListOutput>;
    Get(input: GetInput): Promise<Result<user, Error>>;
}

export class usersUsecase implements Interactor {
    private readonly repository: Repository;
    private readonly dbClient: DBClient
    constructor(repository: Repository, dbClient: DBClient) {
        this.repository = repository;
        this.dbClient = dbClient
    }
    async GetList(): Promise<ListOutput> {
        const data = await getList(this.dbClient, this.repository);
        return convertListOutput(data);
    }
    async Get(input: GetInput): Promise<Result<user, Error>> {
        const data = await get(this.dbClient, this.repository, input)
        if (data.isFailure()) {
            return new Failure(data.value);
        } else {
            return new Success(convertGetOutput(data.value));
        }
    }
}
