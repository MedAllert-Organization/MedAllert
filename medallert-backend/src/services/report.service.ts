import { PrismaClient } from "@prisma/client";
import { startOfWeek, endOfWeek, startOfMonth, endOfMonth } from "date-fns";

const prisma = new PrismaClient();
export type ReportPeriod = "Weekly" | "Monthly";

export async function generateMedicationReport(userId: string, period: ReportPeriod) {
  const now = new Date();
  const startDate = period === "Weekly"? startOfWeek(now,{weekStartsOn:1}): startOfMonth(now);
  const endDate = period === "Weekly"? endOfWeek(now,{weekStartsOn:1}): endOfMonth(now);
 
  const Treatments = await prisma.Treatments.findMany({
    where:{Treatments}
  });
}