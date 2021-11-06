import {DBClient} from "../../domain/DBClient";
import {PrismaClient} from "@prisma/client";

export class Prisma implements DBClient {
    private Prisma: PrismaClient;
    private isTransactionValid: boolean;
    constructor() {
    }
    CloseTransaction(): DBClient {
        return undefined;
    }

    CommitTransaction(): DBClient {
        return undefined;
    }

    CreateTransaction(): undefined {
        return undefined;
    }

    DBClient() {
        return undefined;
    }

    Rollback(): undefined {
        return undefined;
    }

}
