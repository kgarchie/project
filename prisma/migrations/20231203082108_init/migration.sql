/*
  Warnings:

  - You are about to drop the column `content` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the `_meetingtouser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Meeting` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_meetingtouser` DROP FOREIGN KEY `_MeetingToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_meetingtouser` DROP FOREIGN KEY `_MeetingToUser_B_fkey`;

-- AlterTable
ALTER TABLE `meeting` DROP COLUMN `content`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `keywords` VARCHAR(191) NULL,
    ADD COLUMN `summary` VARCHAR(191) NULL,
    ADD COLUMN `transcript` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `_meetingtouser`;

-- AddForeignKey
ALTER TABLE `Meeting` ADD CONSTRAINT `Meeting_hostId_fkey` FOREIGN KEY (`hostId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
