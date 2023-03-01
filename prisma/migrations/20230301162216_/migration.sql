/*
  Warnings:

  - You are about to drop the column `userId` on the `platforms` table. All the data in the column will be lost.
  - You are about to drop the `form` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX `Platforms_userId_key` ON `platforms`;

-- AlterTable
ALTER TABLE `platforms` DROP COLUMN `userId`;

-- DropTable
DROP TABLE `form`;
