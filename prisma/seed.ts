import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const adminEmail: string = process.env.ADMIN_EMAIL || "hoge.gmail.com";
    await prisma.user.create({
        data: {
            email: adminEmail,
        },
    });
    const allUsers = await prisma.user.findMany();
    console.dir(allUsers, { depth: null });
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
