import {PrismaClient} from "@prisma/client";
import {User} from "@prisma/client"

export interface Repository {
    GetList(prisma: PrismaClient):Promise<User[]>;
    Get(prisma: PrismaClient, userID: number):Promise<Result<User, resourceNotFoundError>>;
}

// export type user = {
//     ID: number
//     email: string
//     name: string
// }
