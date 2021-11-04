import {Repository, user as userDomain} from "../../domain/users";
import {PrismaClient, User} from "@prisma/client";
import {Failure, Result, Success} from "../../errorTypes/resultType";
import {resourceNotFoundError} from "../../errorTypes/errors";

export class usersInfra implements Repository {
    GetList = async (prisma: PrismaClient): Promise<User[]> => {
        return prisma.user.findMany()
    };

    Get = async (prisma: PrismaClient, userID: number): Promise<Result<userDomain, resourceNotFoundError>> => {
        const rowData = await prisma.user.findUnique({
            where: {
                id: userID,
            },
        })
        if (rowData == null) {
            return new Failure(new resourceNotFoundError("memoID: " + String(userID)));
        }
        else {
            // return new Success(rowData);
            const resData:userDomain = {
                ID: rowData.id,
                email: rowData.email,
                name: rowData.name
            }
            return new Success(resData);
        }
    }
}
