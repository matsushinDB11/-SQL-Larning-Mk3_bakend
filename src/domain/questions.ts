import { DBClient } from "./DBClient";
import { Result } from "../errorHelper/resultType";

export interface Repository {
    GetList(dbClient: DBClient): Promise<Result<question[], Error>>;
    Get(
        dbClient: DBClient,
        questionID: number
    ): Promise<Result<question, Error>>;
    GetSqliteFile(fileName: string): Result<sqliteFile, Error>;
}

export type question = {
    ID: number;
    title: string;
    classID: number;
    sqliteFileName: string;
};

export type sqliteFile = {
    base64: string;
};
