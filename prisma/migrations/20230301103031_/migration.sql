/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Platforms` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `Form` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Form_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Platforms_userId_key` ON `Platforms`(`userId`);
