import {PrismaClient} from "@prisma/client";

export interface DBClient {
    ConnectDB():PrismaClient;
    CreateTransaction(): void;
    Rollback(): void;
    CloseTransaction():void; // Prismaでは自動
    CommitTransaction(): void; // Prismaでは自動
}
