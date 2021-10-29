import {PrismaInterface as Prisma} from "./prisma";
import {User} from "@prisma/client"

export interface Repository {
    GetList(prisma: Prisma):Promise<User[]>;
}

// export type user = {
//     ID: number
//     email: string
//     name: string
// }
