import {employee, Repository} from "../../domain/employees/repository";
import {PrismaClient} from "@prisma/client";


export function getList(prisma: PrismaClient,employeeRepo: Repository):employee[] {
    return  employeeRepo.GetList(prisma);
}
