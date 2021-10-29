import {user as userDomain, Repository} from "../../domain/users";
import {PrismaClient} from "@prisma/client";

export function getList(prisma: PrismaClient, userRepo: Repository):userDomain[] {
    return userRepo.GetList(prisma);
}
