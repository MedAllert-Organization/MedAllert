import path from "node:path";
import type { PrismaConfig } from "prisma";

export default {
  schema: path.join("src", "infra", "prisma", "schema.prisma"),
} satisfies PrismaConfig;
