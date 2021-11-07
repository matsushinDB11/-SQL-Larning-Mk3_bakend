import {PrismaClient} from "@prisma/client";
import {DBClient} from "./DBClient";
import {Result} from "../errorTypes/resultType";
import {resourceNotFoundError} from "../errorTypes/errors";

export interface Repository {
    GetList(dbClient: DBClient):Promise<user[]>;
    Get(dbClient: DBClient, userID: number):Promise<Result<user, Error>>;
}

export type user = {
    ID: number
    email: string
    name: string | null
}
