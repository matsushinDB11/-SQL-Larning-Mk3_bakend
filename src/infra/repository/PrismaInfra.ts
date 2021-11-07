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
        return PrismaInfra;
    }
    ConnectDB() {
        if (this.Prisma == undefined){
            this.Prisma = new PrismaClient();
        }
        return this.Prisma;
    }
    CreateTransaction():void {
    }
    Rollback(): void {
    }
    CloseTransaction(): void {
    }

    CommitTransaction(): void {
    }
}
