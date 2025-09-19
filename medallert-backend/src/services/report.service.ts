import { PrismaClient } from "@prisma/client";
import { startOfWeek, endOfWeek, startOfMonth, endOfMonth } from "date-fns";

const prisma = new PrismaClient();
export type ReportPeriod = "Weekly" | "Monthly";

export async function generateMedicationReport(userId: string, period: ReportPeriod) {
  const now = new Date();
  const startDate =
    period === "Weekly" ? startOfWeek(now, { weekStartsOn: 1 }) : startOfMonth(now);
  const endDate =
    period === "Weekly" ? endOfWeek(now, { weekStartsOn: 1 }) : endOfMonth(now);
  
  const medications = await prisma.medications.findMany({
    where: { userId },
    include: {
      notifications: {
        where: { 
          alertAt: { 
            gte: startDate, 
            lte: endDate 
          } 
        },
        orderBy: { alertAt: "asc" },
      },
      annotations: {
        where: { 
          createdAt: { 
            gte: startDate, 
            lte: endDate 
          } 
        },
      },
      visualType: true,
      soundType: true,
    },
  });
  
  return {
    userId,
    period,
    startDate,
    endDate,
    medications: medications.map((med) => ({
      medicationId: med.medicationId,
      name: med.name,
      dose: med.dose,
      description: med.description,
      visualType: med.visualType,
      soundType: med.soundType,
      alertPeriodInHours: med.alertPeriodInHours,
      endTreatmentAt: med.endTreatmentAt,
      totalNotifications: med.notifications.length,
      notifications: med.notifications,
      totalAnnotations: med.annotations.length,
      annotations: med.annotations,
    })),
    summary: {
      totalMedications: medications.length,
      totalNotifications: medications.reduce((sum, med) => sum + med.notifications.length, 0),
      totalAnnotations: medications.reduce((sum, med) => sum + med.annotations.length, 0),
    }
  };
}