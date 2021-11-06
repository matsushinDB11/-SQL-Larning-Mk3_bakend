import {PrismaClient} from "@prisma/client";

export interface DBClient {
    ConnectDB():PrismaClient | undefined;
    CreateTransaction():undefined;
    Rollback(): undefined;
    CloseTransaction():DBClient | undefined; // Prismaでは自動
    CommitTransaction(): DBClient | undefined; // Prismaでは自動
}
