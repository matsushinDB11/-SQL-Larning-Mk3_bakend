import {PrismaInterface as Tx} from "../prisma";

export interface Repository {
    GetList(prisma: Tx): employee[];
}

export type employee = {
    ID: number
    name: string
    height: number
    email: string
    weight: number
    membershipYear: number
    birthday: string
    bloodType: string
    // CreatedAt:
    // UpdatedAt:
}
