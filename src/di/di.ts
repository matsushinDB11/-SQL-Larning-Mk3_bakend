import { usersController } from "../controller/users";
import { CreateUsersController } from "./users";

export type Service = {
    users: usersController;
};

export class NewService implements Service {
    users!: usersController;
    constructor() {
        return {
            users: CreateUsersController(),
        };
    }
}
