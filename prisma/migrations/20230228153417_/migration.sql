-- CreateTable
CREATE TABLE `Platforms` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `IOS` BOOLEAN NOT NULL DEFAULT false,
    `android` BOOLEAN NOT NULL DEFAULT false,
    `web` BOOLEAN NOT NULL DEFAULT false,
    `desktop` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Foundations` (
    `id` VARCHAR(191) NOT NULL,
    `platfromId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LandingPage` (
    `id` VARCHAR(191) NOT NULL,
    `foundationId` VARCHAR(191) NOT NULL,
    `dashboard` BOOLEAN NOT NULL DEFAULT false,
    `navigationTabs` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Settings` (
    `id` VARCHAR(191) NOT NULL,
    `foundationId` VARCHAR(191) NOT NULL,
    `notifications` BOOLEAN NOT NULL DEFAULT false,
    `nightMode` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Help` (
    `id` VARCHAR(191) NOT NULL,
    `foundationId` VARCHAR(191) NOT NULL,
    `learnMore` BOOLEAN NOT NULL DEFAULT false,
    `contactUs` BOOLEAN NOT NULL DEFAULT false,
    `FAQ` BOOLEAN NOT NULL DEFAULT false,
    `report` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Auth` (
    `id` VARCHAR(191) NOT NULL,
    `foundationId` VARCHAR(191) NOT NULL,
    `learnMore` BOOLEAN NOT NULL DEFAULT false,
    `contactUs` BOOLEAN NOT NULL DEFAULT false,
    `FAQ` BOOLEAN NOT NULL DEFAULT false,
    `report` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Functionalities` (
    `id` VARCHAR(191) NOT NULL,
    `platfromId` VARCHAR(191) NOT NULL,
    `learningManagmentSystem` BOOLEAN NOT NULL DEFAULT false,
    `workPlace` BOOLEAN NOT NULL DEFAULT false,
    `ODCManagment` BOOLEAN NOT NULL DEFAULT false,
    `jopHub` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LearningManagmentSystem` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `LearningManagmentSystem_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WorkPlace` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `WorkPlace_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ODCManagment` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ODCManagment_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jopHub` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `jopHub_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


-- AddForeignKey
ALTER TABLE `Foundations` ADD CONSTRAINT `Foundations_platfromId_fkey` FOREIGN KEY (`platfromId`) REFERENCES `Platforms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LandingPage` ADD CONSTRAINT `LandingPage_foundationId_fkey` FOREIGN KEY (`foundationId`) REFERENCES `Foundations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Settings` ADD CONSTRAINT `Settings_foundationId_fkey` FOREIGN KEY (`foundationId`) REFERENCES `Foundations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Help` ADD CONSTRAINT `Help_foundationId_fkey` FOREIGN KEY (`foundationId`) REFERENCES `Foundations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Auth` ADD CONSTRAINT `Auth_foundationId_fkey` FOREIGN KEY (`foundationId`) REFERENCES `Foundations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Functionalities` ADD CONSTRAINT `Functionalities_platfromId_fkey` FOREIGN KEY (`platfromId`) REFERENCES `Platforms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
