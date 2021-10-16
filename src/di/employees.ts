import {usecaseEmployee} from "../usecase/employees/endpoint";
import {InfraEmployees} from "../infra/repository/employees/repsitory";
import {employees as controllerEmployees} from "../controller/employees";

// export function CreateEmployeesController() {
//
//     const i = new usecaseEmployee(
//
//     )
// }

export class CreateEmployeesController {
    private employeeRepository!: InfraEmployees;
    // constructor(db) {
    // }
    public createController():controllerEmployees {
        const i = new usecaseEmployee(
            this.employeeRepository
        )
        return new controllerEmployees(i);
    }
}

