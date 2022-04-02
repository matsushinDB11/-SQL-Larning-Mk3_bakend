// テスト用問題の注入

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.class.create({
        data: {
            title: "第1回",
            questions: {
                create: [
                    {
                        title: "employees テーブルの内容を全て取得せよ",
                        sqliteFileName: "database1.sqlite3",
                    },
                    {
                        title: "customers テーブルの内容を全て取得せよ",
                        sqliteFileName: "database1.sqlite3",
                    },
                ],
            },
        },
    });
};

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
