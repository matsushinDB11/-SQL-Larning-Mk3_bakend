import {usecaseEmployee} from "../usecase/employees/endpoint";
import {InfraEmployees} from "../infra/repository/employees/repsitory";
import {abstractEmployeesController, employees} from "../controller/employees";

// export function CreateEmployeesController() {
//
//     const i = new usecaseEmployee(
//
//     )
// }

export class CreateEmployeesController {
    // private employeeRepository!: InfraEmployees;
    // constructor(db) {
    // }
    public createController():abstractEmployeesController {
        const i = new usecaseEmployee(
            // this.employeeRepository
            new InfraEmployees(),
        )
        return new employees(i);
    }
}
