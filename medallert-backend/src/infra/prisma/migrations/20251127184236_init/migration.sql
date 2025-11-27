/*
  Warnings:

  - You are about to drop the column `visual_type_id` on the `medications` table. All the data in the column will be lost.
  - You are about to drop the column `visual` on the `visual_types` table. All the data in the column will be lost.
  - You are about to drop the `Timezone` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[visual_type_id]` on the table `treatment_medications` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `color1` to the `visual_types` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "VisualTypeEnum" AS ENUM ('CAPSULE', 'PILL', 'TABLET', 'DROP', 'LIQUID', 'INHALER', 'INJECTION', 'OINTMENT', 'PATCH');

-- CreateEnum
CREATE TYPE "VisualSizeEnum" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateEnum
CREATE TYPE "VisualPatternEnum" AS ENUM ('SOLID', 'STRIPED', 'HALF', 'RING', 'DOTS', 'BAND', 'GRADIENT');

-- DropForeignKey
ALTER TABLE "medications" DROP CONSTRAINT "medications_visual_type_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_timezoneId_fkey";

-- AlterTable
ALTER TABLE "medications" DROP COLUMN "visual_type_id";

-- AlterTable
ALTER TABLE "treatment_medications" ADD COLUMN     "visual_type_id" TEXT;

-- AlterTable
ALTER TABLE "visual_types" DROP COLUMN "visual",
ADD COLUMN     "color1" TEXT NOT NULL,
ADD COLUMN     "color2" TEXT,
ADD COLUMN     "opacity" DOUBLE PRECISION,
ADD COLUMN     "pattern" "VisualPatternEnum" NOT NULL DEFAULT 'SOLID',
ADD COLUMN     "rotation" INTEGER,
ADD COLUMN     "size" "VisualSizeEnum" NOT NULL DEFAULT 'MEDIUM',
ADD COLUMN     "visualType" "VisualTypeEnum" NOT NULL DEFAULT 'PILL';

-- DropTable
DROP TABLE "Timezone";

-- CreateTable
CREATE TABLE "timezones" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "utcOffset" INTEGER NOT NULL,

    CONSTRAINT "timezones_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "timezones_name_key" ON "timezones"("name");

-- CreateIndex
CREATE UNIQUE INDEX "treatment_medications_visual_type_id_key" ON "treatment_medications"("visual_type_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_timezoneId_fkey" FOREIGN KEY ("timezoneId") REFERENCES "timezones"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treatment_medications" ADD CONSTRAINT "treatment_medications_visual_type_id_fkey" FOREIGN KEY ("visual_type_id") REFERENCES "visual_types"("visual_id") ON DELETE SET NULL ON UPDATE CASCADE;
