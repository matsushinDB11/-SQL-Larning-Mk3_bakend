import {employee, Repository} from "../../domain/employees/repository";
import {PrismaInterface as Tx} from "../../domain/prisma";

export function getList(prisma: Tx,employeeRepo: Repository):employee[] {
    return  employeeRepo.GetList(prisma);
}
