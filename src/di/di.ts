import {employees as employeesController} from "../controller/employees";
import {CreateEmployeesController} from "./employees";

export class Service {
    employees!: employeesController;
    constructor() {
        return {
            employees: CreateEmployeesController(),
        };
    }
}
