/*
  Warnings:

  - You are about to alter the column `hours` on the `estimation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `cost` on the `estimation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `estimation` MODIFY `hours` DOUBLE NOT NULL,
    MODIFY `cost` DOUBLE NOT NULL;
