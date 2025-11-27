import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  const visualTypeCount = await prisma.visualTypes.count();
  if (visualTypeCount < 8) {
    await prisma.visualTypes.createMany({
      data: [
        { visual: "Capsula" },
        { visual: "Comprimido" },
        { visual: "Pastilha" },
        { visual: "Xarope" },
        { visual: "Gel" },
        { visual: "Creme" },
        { visual: "Aerosol" },
        { visual: "Outro" },
      ],
      skipDuplicates: true,
    });
    console.log("✅ Default Visual types created.");
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
