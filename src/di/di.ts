import { usersController } from "../controller/users";
import { CreateUsersController } from "./users";
import { loginController } from "../controller/login";
import { CreateLoginController } from "./login";
import QuestionsController from "../controller/questions";
import CreateQuestionsController from "./questions";

export type Service = {
    users: usersController;
    login: loginController;
    questions: QuestionsController;
};

export class NewService implements Service {
    users!: usersController;
    login!: loginController;
    questions!: QuestionsController;
    constructor() {
        return {
            users: CreateUsersController(),
            login: CreateLoginController(),
            questions: CreateQuestionsController(),
        };
    }
}
