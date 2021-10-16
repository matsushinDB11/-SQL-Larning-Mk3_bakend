import {employees as controllerEmployees} from "../controller/employees";
import {CreateEmployeesController} from "./employees";

type Service = {
    employees: controllerEmployees
}

export class NewService {
    constructor() {
        NewEmployeesController:
    }
    CreateService():Service {
        return {
            employees: CreateEmployeesController.
        }
    }
}
