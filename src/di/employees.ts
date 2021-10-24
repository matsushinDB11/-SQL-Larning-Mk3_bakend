import {usecaseEmployee} from "../usecase/employees/endpoint";
import {InfraEmployees} from "../infra/repository/employees/repsitory";
import {employees as employeesController} from "../controller/employees";

export function CreateEmployeesController():employeesController {
    const i = new usecaseEmployee(
        new InfraEmployees()
    )
    return new employeesController(i);
}

