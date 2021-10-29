import {Repository} from "../../domain/users";
import {PrismaClient, User} from "@prisma/client";

export async function getList(prisma: PrismaClient, userRepo: Repository):Promise<User[]> {
    return await userRepo.GetList(prisma);
}
