import {PrismaInterface as Prisma} from "./prisma";

export interface Repository {
    GetList(prisma: Prisma):user[];
}

export type user = {
    ID: number
    email: string
    name: string
}
