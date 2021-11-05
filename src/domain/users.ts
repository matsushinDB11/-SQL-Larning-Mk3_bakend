import {PrismaClient} from "@prisma/client";
import {Result} from "../errorTypes/resultType";
import {resourceNotFoundError} from "../errorTypes/errors";

export interface Repository {
    GetList(prisma: PrismaClient):Promise<user[]>;
    Get(prisma: PrismaClient, userID: number):Promise<Result<user, resourceNotFoundError>>;
}

export type user = {
    ID: number
    email: string
    name: string | null
}
