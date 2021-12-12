// テスト用問題の注入

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.class.create({
        data: {
            title: "第1回",
            quetsions: {
                create: [
                    { title: "employees テーブルの内容を全て取得せよ" },
                    { title: "customers テーブルの内容を全て取得せよ" },
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
