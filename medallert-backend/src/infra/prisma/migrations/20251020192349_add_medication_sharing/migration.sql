/*
  Warnings:

  - You are about to drop the column `end_treatment_at` on the `medications` table. All the data in the column will be lost.
  - You are about to drop the column `treatment_id` on the `medications` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."medications" DROP CONSTRAINT "medications_treatment_id_fkey";

-- AlterTable
ALTER TABLE "medications" DROP COLUMN "end_treatment_at",
DROP COLUMN "treatment_id";

-- CreateTable
CREATE TABLE "medication_shares" (
    "medication_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medication_shares_pkey" PRIMARY KEY ("medication_id","user_id")
);

-- CreateTable
CREATE TABLE "_TreatmentMedications" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_TreatmentMedications_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_TreatmentMedications_B_index" ON "_TreatmentMedications"("B");

-- AddForeignKey
ALTER TABLE "medication_shares" ADD CONSTRAINT "medication_shares_medication_id_fkey" FOREIGN KEY ("medication_id") REFERENCES "medications"("medication_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medication_shares" ADD CONSTRAINT "medication_shares_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TreatmentMedications" ADD CONSTRAINT "_TreatmentMedications_A_fkey" FOREIGN KEY ("A") REFERENCES "medications"("medication_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TreatmentMedications" ADD CONSTRAINT "_TreatmentMedications_B_fkey" FOREIGN KEY ("B") REFERENCES "treatments"("treatment_id") ON DELETE CASCADE ON UPDATE CASCADE;
