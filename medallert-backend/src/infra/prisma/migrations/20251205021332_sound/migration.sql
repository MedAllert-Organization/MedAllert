/*
  Warnings:

  - Added the required column `duration` to the `sound_types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `format` to the `sound_types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `sound_types` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SoundFormatEnum" AS ENUM ('MP3', 'WAV', 'M4A', 'AAC', 'OGG', 'CAF');

-- AlterTable
ALTER TABLE "sound_types" ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "format" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
