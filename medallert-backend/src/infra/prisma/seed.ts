import { PrismaClient } from "./generated/prisma/index.js";
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed...");

  await prisma.timezone.createMany({
    data: [
      {
        id: "America/Sao_Paulo",
        name: "America/Sao_Paulo",
        label: "GMT-3 Brasília",
        utcOffset: -3,
      },
      {
        id: "America/New_York",
        name: "America/New_York",
        label: "GMT-5 Nova York",
        utcOffset: -5,
      },
      {
        id: "Europe/London",
        name: "Europe/London",
        label: "GMT+0 Londres",
        utcOffset: 0,
      },
      {
        id: "Europe/Berlin",
        name: "Europe/Berlin",
        label: "GMT+1 Berlim",
        utcOffset: 1,
      },
      {
        id: "Asia/Tokyo",
        name: "Asia/Tokyo",
        label: "GMT+9 Tóquio",
        utcOffset: 9,
      }
    ],
    skipDuplicates: true,
  });

  console.log("🌱 Seeds aplicadas com sucesso!");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
