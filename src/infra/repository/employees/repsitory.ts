import {employee, Repository} from "../../../domain/employees/repository";
import {PrismaInterface as Tx} from "../../../domain/prisma";

export class InfraEmployees implements Repository {
    GetList(tx: Tx): employee[] {
        // テスト用サンプルリターン
        const sampleReturn: employee = {
            ID:1,
            name:"シマゴロー",
            height:168,
            email:"simagoro@neko.com",
            weight:72,
            membershipYear:1989,
            birthday:"1956/10/1",
            bloodType:"A"
        }
        return [sampleReturn,];
    }
}
