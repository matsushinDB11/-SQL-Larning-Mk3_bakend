import {PrismaClient} from "@prisma/client";

export interface DBClient {
    DBClient():PrismaClient;
    CreateTransaction():undefined;
    CloseTransaction():DBClient;
    Rollback(): undefined;
    CommitTransaction(): DBClient;
}
