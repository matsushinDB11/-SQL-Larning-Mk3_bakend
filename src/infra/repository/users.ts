import {Repository} from "../../domain/users";
import {PrismaClient, User} from "@prisma/client";

export class usersInfra implements Repository {
    GetList = async (prisma: PrismaClient): Promise<User[]> => {
        return await prisma.user.findMany()
    };
}
