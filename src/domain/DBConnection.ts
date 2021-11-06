import {PrismaClient} from "@prisma/client";

export interface DBConnection {
    DBClient():PrismaClient;
    CreateTransaction():undefined;
    CloseTransaction():DBConnection;
    Rollback(): undefined;
    CommitTransaction(): DBConnection;
}
