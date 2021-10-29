import {Repository} from "../../domain/users";
import {PrismaClient, User} from "@prisma/client";

export class usersInfra implements Repository {
    GetList = async (prisma: PrismaClient): Promise<User[]> => {
        return prisma.user.findMany()
    };

    Get = async (prisma: PrismaClient, userID: number): Promise<Result<User, resourceNotFoundError>> => {
        const data = await prisma.user.findUnique({
            where: {
                id: userID,
            },
        })
        if (data != null) {
            return new Success(data);
        }
        else {
            return new Failure(new resourceNotFoundError("memoID: " + String(userID)));
        }
    }
}
