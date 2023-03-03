/*
  Warnings:

  - You are about to drop the `form` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `form` DROP FOREIGN KEY `Form_platfromId_fkey`;

-- DropTable
DROP TABLE `form`;

-- CreateTable
CREATE TABLE `Selects` (
    `id` VARCHAR(191) NOT NULL,
    `featureName` VARCHAR(191) NOT NULL,
    `platfromId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estimation` (
    `id` VARCHAR(191) NOT NULL,
    `hours` VARCHAR(191) NOT NULL,
    `cost` VARCHAR(191) NOT NULL,
    `platfromId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Estimation_platfromId_key`(`platfromId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Selects` ADD CONSTRAINT `Selects_platfromId_fkey` FOREIGN KEY (`platfromId`) REFERENCES `Platforms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Estimation` ADD CONSTRAINT `Estimation_platfromId_fkey` FOREIGN KEY (`platfromId`) REFERENCES `Platforms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
