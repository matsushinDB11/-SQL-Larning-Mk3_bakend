import { DBClient } from "./DBClient";
import { Result } from "../errorHelper/resultType";

interface Repository {
    GetList(dbClient: DBClient): Promise<Result<question[], Error>>;
    Get(
        dbClient: DBClient,
        questionID: number
    ): Promise<Result<question, Error>>;
}

type question = {
    ID: number;
    title: string;
    classID: number;
};
