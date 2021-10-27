import {user ,Repository} from "../../domain/users";
import {PrismaInterface as Prisma} from "../../domain/prisma";
import {PrismaClient} from "@prisma/client";

export class usersInfra implements Repository {
    GetList(prisma: PrismaClient): user[] {
        const res = prisma.user.findMany()
        return [];
    }
}
