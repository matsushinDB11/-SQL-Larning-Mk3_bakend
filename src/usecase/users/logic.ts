import {user, Repository} from "../../domain/users";
import {PrismaInterface as Prisma} from "../../domain/prisma";

export function getList(prisma: Prisma, userRepo: Repository) {
    return userRepo.GetList(prisma);
}
