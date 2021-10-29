import {Interactor} from "../usecase/users/endpoint"
import {ListOutput} from "../usecase/users/output";

export class usersController {
    protected interactor: Interactor;
    constructor(interactor: Interactor) {
        this.interactor = interactor;
    }
    async GetList():Promise<ListOutput> {
        return this.interactor.GetList();
    }
}
