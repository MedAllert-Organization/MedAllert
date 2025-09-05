import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userData = [
  {
    full_name: "User Name",
    email: "user@exemplo.com",
    hash: "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
    phone: "61998123456",
  },
];

async function seeding() {
  console.log("Start seeding...");
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.user_id}`);
  }
  console.log("Seeding finished.");
}

seeding()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
