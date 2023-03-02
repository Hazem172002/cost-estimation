/*
  Warnings:

  - You are about to drop the column `name` on the `jophub` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `learningmanagmentsystem` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `odcmanagment` table. All the data in the column will be lost.
  - You are about to drop the column `features` on the `selects` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `workplace` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[featureName]` on the table `jopHub` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[featureName]` on the table `LearningManagmentSystem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[featureName]` on the table `ODCManagment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[featureName]` on the table `WorkPlace` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `featureName` to the `jopHub` table without a default value. This is not possible if the table is not empty.
  - Added the required column `featureName` to the `LearningManagmentSystem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `featureName` to the `ODCManagment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `featureName` to the `Selects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `featureName` to the `WorkPlace` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `jopHub_name_key` ON `jophub`;

-- DropIndex
DROP INDEX `LearningManagmentSystem_name_key` ON `learningmanagmentsystem`;

-- DropIndex
DROP INDEX `ODCManagment_name_key` ON `odcmanagment`;

-- DropIndex
DROP INDEX `WorkPlace_name_key` ON `workplace`;

-- AlterTable
ALTER TABLE `jophub` DROP COLUMN `name`,
    ADD COLUMN `featureName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `learningmanagmentsystem` DROP COLUMN `name`,
    ADD COLUMN `featureName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `odcmanagment` DROP COLUMN `name`,
    ADD COLUMN `featureName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `selects` DROP COLUMN `features`,
    ADD COLUMN `featureName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `workplace` DROP COLUMN `name`,
    ADD COLUMN `featureName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `jopHub_featureName_key` ON `jopHub`(`featureName`);

-- CreateIndex
CREATE UNIQUE INDEX `LearningManagmentSystem_featureName_key` ON `LearningManagmentSystem`(`featureName`);

-- CreateIndex
CREATE UNIQUE INDEX `ODCManagment_featureName_key` ON `ODCManagment`(`featureName`);

-- CreateIndex
CREATE UNIQUE INDEX `WorkPlace_featureName_key` ON `WorkPlace`(`featureName`);
