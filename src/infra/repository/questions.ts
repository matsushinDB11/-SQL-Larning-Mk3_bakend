import { question, Repository } from "../../domain/questions";
import { Failure, Result, Success } from "../../errorHelper/resultType";
import PrismaInfra from "./PrismaInfra";
import { Question } from "@prisma/client";
import {
    DBInternalError,
    resourceNotFoundError,
} from "../../errorHelper/errors";

class QuestionsInfra implements Repository {
    GetList = async (
        dbClient: PrismaInfra
    ): Promise<Result<question[], Error>> => {
        try {
            const rowData: Question[] = await dbClient
                .ConnectDB()
                .question.findMany();
            const resData: question[] = [];
            rowData.forEach((data) => {
                resData.push({
                    ID: data.id,
                    title: data.title,
                    classID: data.classId,
                    sqliteFileName: data.sqliteFileName,
                });
            });
            return new Success(resData);
        } catch (e) {
            return new Failure(new DBInternalError("Get questions list"));
        }
    };
    Get = async (
        dbClient: PrismaInfra,
        questionID: number
    ): Promise<Result<question, Error>> => {
        try {
            const rowData = await dbClient.ConnectDB().question.findUnique({
                where: {
                    id: questionID,
                },
            });
            if (rowData == null) {
                return new Failure(
                    new resourceNotFoundError("memoID: " + String(questionID))
                );
            } else {
                const resData: question = {
                    ID: rowData.id,
                    title: rowData.title,
                    classID: rowData.classId,
                    sqliteFileName: rowData.sqliteFileName,
                };
                return new Success(resData);
            }
        } catch (e) {
            return new Failure(new DBInternalError("Get question"));
        }
    };
}

export default QuestionsInfra;
