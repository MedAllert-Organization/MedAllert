/*
  Warnings:

  - A unique constraint covering the columns `[treatmentMedicationId]` on the table `visual_types` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "treatment_medications" DROP CONSTRAINT "treatment_medications_visual_type_id_fkey";

-- AlterTable
ALTER TABLE "visual_types" ADD COLUMN     "treatmentMedicationId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "visual_types_treatmentMedicationId_key" ON "visual_types"("treatmentMedicationId");

-- AddForeignKey
ALTER TABLE "treatment_medications" ADD CONSTRAINT "treatment_medications_visual_type_id_fkey" FOREIGN KEY ("visual_type_id") REFERENCES "visual_types"("visual_id") ON DELETE CASCADE ON UPDATE CASCADE;
