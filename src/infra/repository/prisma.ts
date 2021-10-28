import {PrismaInterface} from "../../domain/prisma";
import {PrismaClient} from '@prisma/client';

export class Prisma implements PrismaInterface{
    constructor() {
        return new PrismaClient()
    }
}
