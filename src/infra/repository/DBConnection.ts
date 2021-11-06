import {DBConnection} from "../../domain/DBConnection";

export class Prisma implements DBConnection {
    CloseTransaction(): DBConnection {
        return undefined;
    }

    CommitTransaction(): DBConnection {
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
