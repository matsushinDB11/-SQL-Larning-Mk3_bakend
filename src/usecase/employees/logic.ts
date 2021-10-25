import {employee, Repository} from "../../domain/employees/repository";
import {PrismaInterface as Tx} from "../../domain/prisma";

export function getList(tx: Tx,employeeRepo: Repository):employee[] {
    return  employeeRepo.GetList(tx);
}
