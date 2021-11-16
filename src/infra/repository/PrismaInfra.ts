import { DBClient } from "../../domain/DBClient";
import { PrismaClient } from "@prisma/client";

export class PrismaInfra implements DBClient {
    private Prisma: PrismaClient | undefined;
    private isTransactionValid: boolean;
    constructor() {
        this.Prisma = undefined;
        this.isTransactionValid = false;
    }
    NewDBClient(Prisma: PrismaClient) {
        this.Prisma = Prisma;
        this.isTransactionValid = false;
        return PrismaInfra;
    }
    ConnectDB() {
        if (this.Prisma == undefined) {
            this.Prisma = new PrismaClient();
        }
        return this.Prisma;
    }
    CreateTransaction(): void {
        return;
    }
    Rollback(): void {
        return;
    }
    CloseTransaction(): void {
        return;
    }

    CommitTransaction(): void {
        return;
    }
}
