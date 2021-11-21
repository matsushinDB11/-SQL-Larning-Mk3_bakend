import { usersController } from "../controller/users";
import { CreateUsersController } from "./users";
import { loginController } from "../controller/login";
import { CreateLoginController } from "./login";

export type Service = {
    users: usersController;
    login: loginController;
};

export class NewService implements Service {
    users!: usersController;
    login!: loginController;
    constructor() {
        return {
            users: CreateUsersController(),
            login: CreateLoginController(),
        };
    }
}
