/*
  Warnings:

  - You are about to drop the `selects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `selects` DROP FOREIGN KEY `Selects_platfromId_fkey`;

-- DropTable
DROP TABLE `selects`;

-- CreateTable
CREATE TABLE `Form` (
    `id` VARCHAR(191) NOT NULL,
    `featureName` VARCHAR(191) NOT NULL,
    `platfromId` VARCHAR(191) NOT NULL,
    `hours` VARCHAR(191) NOT NULL,
    `cost` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Form` ADD CONSTRAINT `Form_platfromId_fkey` FOREIGN KEY (`platfromId`) REFERENCES `Platforms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
