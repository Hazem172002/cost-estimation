-- CreateTable
CREATE TABLE `Selects` (
    `id` VARCHAR(191) NOT NULL,
    `features` VARCHAR(191) NOT NULL,
    `platfromId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Selects` ADD CONSTRAINT `Selects_platfromId_fkey` FOREIGN KEY (`platfromId`) REFERENCES `Platforms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
