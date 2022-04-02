/*
  Warnings:

  - Added the required column `sqliteFileName` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Question` ADD COLUMN `sqliteFileName` VARCHAR(191) NOT NULL;
