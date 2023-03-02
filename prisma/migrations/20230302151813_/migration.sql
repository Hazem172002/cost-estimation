/*
  Warnings:

  - You are about to drop the column `FAQ` on the `auth` table. All the data in the column will be lost.
  - You are about to drop the column `contactUs` on the `auth` table. All the data in the column will be lost.
  - You are about to drop the column `learnMore` on the `auth` table. All the data in the column will be lost.
  - You are about to drop the column `report` on the `auth` table. All the data in the column will be lost.
  - You are about to drop the column `ODCManagment` on the `functionalities` table. All the data in the column will be lost.
  - You are about to drop the column `jopHub` on the `functionalities` table. All the data in the column will be lost.
  - You are about to drop the column `learningManagmentSystem` on the `functionalities` table. All the data in the column will be lost.
  - You are about to drop the column `workPlace` on the `functionalities` table. All the data in the column will be lost.
  - You are about to drop the column `FAQ` on the `help` table. All the data in the column will be lost.
  - You are about to drop the column `contactUs` on the `help` table. All the data in the column will be lost.
  - You are about to drop the column `learnMore` on the `help` table. All the data in the column will be lost.
  - You are about to drop the column `report` on the `help` table. All the data in the column will be lost.
  - You are about to drop the column `dashboard` on the `landingpage` table. All the data in the column will be lost.
  - You are about to drop the column `navigationTabs` on the `landingpage` table. All the data in the column will be lost.
  - You are about to drop the column `nightMode` on the `settings` table. All the data in the column will be lost.
  - You are about to drop the column `notifications` on the `settings` table. All the data in the column will be lost.
  - Added the required column `featureName` to the `Auth` table without a default value. This is not possible if the table is not empty.
  - Added the required column `featureName` to the `Functionalities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `featureName` to the `Help` table without a default value. This is not possible if the table is not empty.
  - Added the required column `functionalityId` to the `jopHub` table without a default value. This is not possible if the table is not empty.
  - Added the required column `featureName` to the `LandingPage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `functionalityId` to the `LearningManagmentSystem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `functionalityId` to the `ODCManagment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `featureName` to the `Settings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `functionalityId` to the `WorkPlace` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `auth` DROP COLUMN `FAQ`,
    DROP COLUMN `contactUs`,
    DROP COLUMN `learnMore`,
    DROP COLUMN `report`,
    ADD COLUMN `featureName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `functionalities` DROP COLUMN `ODCManagment`,
    DROP COLUMN `jopHub`,
    DROP COLUMN `learningManagmentSystem`,
    DROP COLUMN `workPlace`,
    ADD COLUMN `featureName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `help` DROP COLUMN `FAQ`,
    DROP COLUMN `contactUs`,
    DROP COLUMN `learnMore`,
    DROP COLUMN `report`,
    ADD COLUMN `featureName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `jophub` ADD COLUMN `functionalityId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `landingpage` DROP COLUMN `dashboard`,
    DROP COLUMN `navigationTabs`,
    ADD COLUMN `featureName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `learningmanagmentsystem` ADD COLUMN `functionalityId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `odcmanagment` ADD COLUMN `functionalityId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `settings` DROP COLUMN `nightMode`,
    DROP COLUMN `notifications`,
    ADD COLUMN `featureName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `workplace` ADD COLUMN `functionalityId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `LearningManagmentSystem` ADD CONSTRAINT `LearningManagmentSystem_functionalityId_fkey` FOREIGN KEY (`functionalityId`) REFERENCES `Functionalities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkPlace` ADD CONSTRAINT `WorkPlace_functionalityId_fkey` FOREIGN KEY (`functionalityId`) REFERENCES `Functionalities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ODCManagment` ADD CONSTRAINT `ODCManagment_functionalityId_fkey` FOREIGN KEY (`functionalityId`) REFERENCES `Functionalities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jopHub` ADD CONSTRAINT `jopHub_functionalityId_fkey` FOREIGN KEY (`functionalityId`) REFERENCES `Functionalities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
