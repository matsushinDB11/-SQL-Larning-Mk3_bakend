import {user, Repository} from "../../domain/users";
import {PrismaClient} from "@prisma/client";

export function getList(prisma: PrismaClient, userRepo: Repository) {
    return userRepo.GetList(prisma);
}
