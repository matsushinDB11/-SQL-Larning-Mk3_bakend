import {Repository, user as userDomain} from "../../domain/users";
import {Failure, Result, Success} from "../../errorTypes/resultType";
import {resourceNotFoundError} from "../../errorTypes/errors";
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
}
