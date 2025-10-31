/*
  Warnings:

  - You are about to drop the column `alert_period_in_hours` on the `medications` table. All the data in the column will be lost.
  - You are about to drop the column `dose` on the `medications` table. All the data in the column will be lost.
  - You are about to drop the `_TreatmentMedications` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `medication_shares` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_TreatmentMedications" DROP CONSTRAINT "_TreatmentMedications_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_TreatmentMedications" DROP CONSTRAINT "_TreatmentMedications_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."medication_shares" DROP CONSTRAINT "medication_shares_medication_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."medication_shares" DROP CONSTRAINT "medication_shares_user_id_fkey";

-- AlterTable
ALTER TABLE "public"."medications" DROP COLUMN "alert_period_in_hours",
DROP COLUMN "dose";

-- DropTable
DROP TABLE "public"."_TreatmentMedications";

-- DropTable
DROP TABLE "public"."medication_shares";

-- CreateTable
CREATE TABLE "public"."treatment_medications" (
    "id" TEXT NOT NULL,
    "treatment_id" TEXT NOT NULL,
    "medication_id" TEXT NOT NULL,
    "dose" TEXT NOT NULL,
    "alertPeriodInHours" INTEGER NOT NULL,
    "last_taken" TIMESTAMP(3),
    "taken_quantity" INTEGER NOT NULL DEFAULT 0,
    "total_quantity" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "treatment_medications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."treatment_shares" (
    "treatment_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "treatment_shares_pkey" PRIMARY KEY ("treatment_id","user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "treatment_medications_treatment_id_medication_id_key" ON "public"."treatment_medications"("treatment_id", "medication_id");

-- AddForeignKey
ALTER TABLE "public"."treatment_medications" ADD CONSTRAINT "treatment_medications_treatment_id_fkey" FOREIGN KEY ("treatment_id") REFERENCES "public"."treatments"("treatment_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."treatment_medications" ADD CONSTRAINT "treatment_medications_medication_id_fkey" FOREIGN KEY ("medication_id") REFERENCES "public"."medications"("medication_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."treatment_shares" ADD CONSTRAINT "treatment_shares_treatment_id_fkey" FOREIGN KEY ("treatment_id") REFERENCES "public"."treatments"("treatment_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."treatment_shares" ADD CONSTRAINT "treatment_shares_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
