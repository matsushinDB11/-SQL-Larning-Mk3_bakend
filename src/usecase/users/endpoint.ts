import {ListOutput} from "./output";

export type Interactor = {
    GetList(): ListOutput
}

export class usersUsecase implements Interactor {
    GetList(): ListOutput {
        return
    }
}
