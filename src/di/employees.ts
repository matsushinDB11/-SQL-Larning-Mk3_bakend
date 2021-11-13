import { usecaseEmployee } from "../usecase/employees/endpoint";
import { InfraEmployees } from "../infra/repository/employees/repsitory";
import { employees as employeesController } from "../controller/employees";
import { PrismaClient } from "@prisma/client";

export function CreateEmployeesController(): employeesController {
    const i = new usecaseEmployee(new InfraEmployees(), new PrismaClient());
    return new employeesController(i);
}
