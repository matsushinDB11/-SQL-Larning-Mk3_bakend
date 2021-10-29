import {Repository} from "../../domain/users";
import {PrismaClient, User} from "@prisma/client";
import {convertGetOutput, user} from "./output";

export async function getList(prisma: PrismaClient, userRepo: Repository):Promise<User[]> {
    return await userRepo.GetList(prisma);
}

export async function get(prisma: PrismaClient, userRepo: Repository, input: GetInput):Promise<Result<user, Error>> {
    const data = await userRepo.Get(prisma, input.userID);
    if (data.isFailure()) {
        return new Failure(data.value);
    } else {
        const convertedData = convertGetOutput(data.value);
        return new Success(convertedData);
    }
}
