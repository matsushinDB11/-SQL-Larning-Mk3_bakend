import {abstractEmployeesController, employees as controllerEmployees} from "../controller/employees";
import {CreateEmployeesController} from "./employees";
import exp from "constants";

export type Service = {
    employees: abstractEmployeesController,
}

export function NewService():Service {
    return{
        employees: new CreateEmployeesController().createController(),
    }
}

// export class NewService {
//     constructor() {
//         new CreateEmployeesController
//     }
//     CreateService():Service {
//         return {
//             employees: new controllerEmployees,
//         };
//     }
// }
