import {employee, Repository} from "../../domain/employees/repository";

export function getList(employeeRepo: Repository):employee[] {
    return  employeeRepo.GetList();
}
