-- DropForeignKey
ALTER TABLE "public"."medications" DROP CONSTRAINT "medications_sound_type_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."medications" DROP CONSTRAINT "medications_visual_type_id_fkey";

-- AlterTable
ALTER TABLE "public"."medications" ALTER COLUMN "visual_type_id" DROP NOT NULL,
ALTER COLUMN "sound_type_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."medications" ADD CONSTRAINT "medications_visual_type_id_fkey" FOREIGN KEY ("visual_type_id") REFERENCES "public"."visual_types"("visual_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."medications" ADD CONSTRAINT "medications_sound_type_id_fkey" FOREIGN KEY ("sound_type_id") REFERENCES "public"."sound_types"("sound_id") ON DELETE SET NULL ON UPDATE CASCADE;
