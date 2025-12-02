/*
  Warnings:

  - You are about to drop the `visual_types` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "treatment_medications" DROP CONSTRAINT "treatment_medications_visual_type_id_fkey";

-- DropTable
DROP TABLE "visual_types";

-- CreateTable
CREATE TABLE "VisualTypes" (
    "visualId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "visualType" "VisualTypeEnum" NOT NULL,
    "size" "VisualSizeEnum" NOT NULL,
    "color1" TEXT NOT NULL,
    "color2" TEXT,
    "pattern" "VisualPatternEnum" NOT NULL,
    "opacity" INTEGER,
    "rotation" INTEGER,

    CONSTRAINT "VisualTypes_pkey" PRIMARY KEY ("visualId")
);

-- AddForeignKey
ALTER TABLE "treatment_medications" ADD CONSTRAINT "treatment_medications_visual_type_id_fkey" FOREIGN KEY ("visual_type_id") REFERENCES "VisualTypes"("visualId") ON DELETE CASCADE ON UPDATE CASCADE;
