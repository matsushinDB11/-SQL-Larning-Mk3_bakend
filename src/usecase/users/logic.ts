import {Repository, user as userDomain} from "../../domain/users";
import {PrismaClient, User} from "@prisma/client";
import {GetInput} from "./input";
import {Failure, Result, Success} from "../../errorTypes/resultType";


export async function getList(prisma: PrismaClient, userRepo: Repository):Promise<userDomain[]> {
    return await userRepo.GetList(prisma);
}

export async function get(prisma: PrismaClient, userRepo: Repository, input: GetInput):Promise<Result<userDomain, Error>> {
    const data = await userRepo.Get(prisma, input.userID);
    if (data.isFailure()) {
        return new Failure(data.value);
    } else {
        return new Success(data.value);
    }
}
