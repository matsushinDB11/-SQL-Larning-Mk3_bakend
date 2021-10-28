import {usecaseEmployee} from "../usecase/employees/endpoint";
import {InfraEmployees} from "../infra/repository/employees/repsitory";
import {employees as employeesController} from "../controller/employees";
import {Prisma} from "../infra/repository/prisma";

export function CreateEmployeesController():employeesController {
    const i = new usecaseEmployee(
        new InfraEmployees(),
        new Prisma(),
    )
    return new employeesController(i);
}

