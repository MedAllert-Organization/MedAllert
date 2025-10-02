/*
  Warnings:

  - You are about to drop the `sharings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."sharings" DROP CONSTRAINT "sharings_caretaker_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."sharings" DROP CONSTRAINT "sharings_patient_id_fkey";

-- AlterTable
ALTER TABLE "public"."medications" ADD COLUMN     "treatment_id" TEXT;

-- AlterTable
ALTER TABLE "public"."notifications" ALTER COLUMN "sound_id" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "public"."sharings";

-- CreateTable
CREATE TABLE "public"."treatments" (
    "treatment_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "start_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "treatments_pkey" PRIMARY KEY ("treatment_id")
);

-- AddForeignKey
ALTER TABLE "public"."medications" ADD CONSTRAINT "medications_treatment_id_fkey" FOREIGN KEY ("treatment_id") REFERENCES "public"."treatments"("treatment_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."treatments" ADD CONSTRAINT "treatments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
