import {user ,Repository} from "../../domain/users";
import {PrismaInterface as Prisma} from "../../domain/prisma";

export class usersInfra implements Repository {
    GetList(prisma: Prisma): user[] {
        return [];
    }
}
