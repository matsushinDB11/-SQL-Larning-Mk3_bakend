import {convertGetOutput, convertListOutput, ListOutput, user,} from "./output";
import {PrismaClient} from "@prisma/client";
import {Repository} from "../../domain/users";
import {getList, get} from "./logic";
import {GetInput} from "./input";

export type Interactor = {
    GetList(): Promise<ListOutput>;
    Get(input: GetInput): Promise<Result<user, Error>>;
}

export class usersUsecase implements Interactor {
    private readonly repository: Repository;
    private readonly prisma: PrismaClient
    constructor(repository: Repository, prisma: PrismaClient) {
        this.repository = repository;
        this.prisma = prisma
    }
    async GetList(): Promise<ListOutput> {
        const data = getList(this.prisma, this.repository);
        return convertListOutput(await data);
    }
    async Get(input: GetInput): Promise<Result<user, Error>> {
        const data = await get(this.prisma, this.repository, input)
        if (data.isFailure()) {
            return new Failure(data.value);
        } else {
            return new Success(convertGetOutput(data.value));
        }
    }
}
