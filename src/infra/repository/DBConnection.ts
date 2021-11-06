import {DBClient} from "../../domain/DBClient";
import {PrismaClient} from "@prisma/client";

export class PrismaInfra implements DBClient {
    private Prisma: PrismaClient | undefined;
    private isTransactionValid: boolean;
    constructor() {
        this.Prisma = undefined;
        this.isTransactionValid = false;
    }
    NewDBClient(Prisma: PrismaClient) {
        this.Prisma = Prisma
        this.isTransactionValid = false;
    }
    ConnectDB() {
        if (this.Prisma == undefined){
            this.Prisma = new PrismaClient();
        }
        return this.Prisma;
    }
    CreateTransaction(): undefined {
        return undefined;
    }
    Rollback(): undefined {
        return undefined;
    }
    CloseTransaction(): DBClient | undefined {
        return undefined;
    }

    CommitTransaction(): DBClient | undefined {
        return undefined;
    }
}
