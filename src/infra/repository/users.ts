import {Repository, user as userDomain} from "../../domain/users";
import {Failure, Result, Success} from "../../errorTypes/resultType";
import {DBInternalError, resourceNotFoundError} from "../../errorTypes/errors";
import {DBClient} from "../../domain/DBClient";
import {PrismaInfra} from "./PrismaInfra";

export class usersInfra implements Repository {
    GetList = async (dbClient: PrismaInfra): Promise<userDomain[]> => {
        const rowData = await dbClient.ConnectDB().user.findMany()
        let resData: userDomain[] = [];
        for (let Key in rowData) {
            resData.push({
                ID: rowData[Key].id,
                email: rowData[Key].email,
                name: rowData[Key].name
            })
        }
        return resData;
    };

    Get = async (dbClient: DBClient, userID: number): Promise<Result<userDomain, Error>> => {
        const rowData = await dbClient.ConnectDB().user.findUnique({
            where: {
                id: userID,
            },
        })
        if (rowData == null) {
            return new Failure(new resourceNotFoundError("memoID: " + String(userID)));
        }
        else {
            // return new Success(rowData);
            const resData:userDomain = {
                ID: rowData.id,
                email: rowData.email,
                name: rowData.name
            }
            return new Success(resData);
        }
    }
    Add = async (dbClient: DBClient, email: string, name: string): Promise<Result<void, Error>> => {
        try {
            await dbClient.ConnectDB().user.create({
                data: {
                    email: email,
                    name: name
                }
            })
        } catch (e) {
            return new Failure(new DBInternalError("Add User Fail"))
        }
        return new Success(undefined);
    }

    Update = async (dbClient: DBClient, userID: number, email: string, name: string):Promise<Result<void, Error>> => {
        try {
            await dbClient.ConnectDB().user.update({
                where: {id: userID},
                data: {
                    email: email,
                    name: name
                }
            })
        } catch (e) {
            return new Failure(new DBInternalError("Update User Fail"))
        }
        return new Success(undefined);
    }

}
