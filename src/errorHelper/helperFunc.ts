import { Prisma } from "@prisma/client";
import { DBInternalError, resourceNotFoundError } from "./errors";

// 随時追記
export const convertPrismaError = (
    e: Error | unknown,
    resource: string,
    operation: string
): Error => {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code == "P2025") {
            return new resourceNotFoundError(resource);
        }
    }
    return new DBInternalError(operation);
};
