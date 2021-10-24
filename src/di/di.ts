import {employees as employeesController} from "../controller/employees";
import {CreateEmployeesController} from "./employees";

export type Service = {
    employees: employeesController
}

export class NewService implements Service{
    employees!: employeesController;
    constructor() {
        return {
            employees: CreateEmployeesController(),
        };
    }
}
