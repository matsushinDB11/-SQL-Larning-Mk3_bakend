import {employees as employeesController} from "../controller/employees";
import {CreateEmployeesController} from "./employees";
import {usersController} from "../controller/users";
import {CreateUsersController} from "./users";

export type Service = {
    employees: employeesController,
    users: usersController,
}

export class NewService implements Service{
    employees!: employeesController;
    users!: usersController;
    constructor() {
        return {
            employees: CreateEmployeesController(),
            users: CreateUsersController(),
        };
    }
}
