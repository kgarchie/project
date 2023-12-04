/*
  Warnings:

  - You are about to drop the column `description` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `organizer_id` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `topic` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `organization_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `attachment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `audio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `meetingparticipant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `organization` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `transcript` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userrole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userroleassignment` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `audio` to the `Meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `keywords` to the `Meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `Meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transcript` to the `Meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `attachment` DROP FOREIGN KEY `Attachment_meeting_id_fkey`;

-- DropForeignKey
ALTER TABLE `attachment` DROP FOREIGN KEY `Attachment_uploader_id_fkey`;

-- DropForeignKey
ALTER TABLE `audio` DROP FOREIGN KEY `Audio_meeting_id_fkey`;

-- DropForeignKey
ALTER TABLE `meeting` DROP FOREIGN KEY `Meeting_organizer_id_fkey`;

-- DropForeignKey
ALTER TABLE `meetingparticipant` DROP FOREIGN KEY `MeetingParticipant_meeting_id_fkey`;

-- DropForeignKey
ALTER TABLE `meetingparticipant` DROP FOREIGN KEY `MeetingParticipant_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `transcript` DROP FOREIGN KEY `Transcript_meeting_id_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_organization_id_fkey`;

-- DropForeignKey
ALTER TABLE `userroleassignment` DROP FOREIGN KEY `UserRoleAssignment_role_id_fkey`;

-- DropForeignKey
ALTER TABLE `userroleassignment` DROP FOREIGN KEY `UserRoleAssignment_user_id_fkey`;

-- AlterTable
ALTER TABLE `meeting` DROP COLUMN `description`,
    DROP COLUMN `duration`,
    DROP COLUMN `notes`,
    DROP COLUMN `organizer_id`,
    DROP COLUMN `status`,
    DROP COLUMN `time`,
    DROP COLUMN `topic`,
    ADD COLUMN `audio` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `keywords` VARCHAR(191) NOT NULL,
    ADD COLUMN `summary` VARCHAR(191) NOT NULL,
    ADD COLUMN `transcript` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `first_name`,
    DROP COLUMN `last_name`,
    DROP COLUMN `organization_id`,
    DROP COLUMN `username`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `attachment`;

-- DropTable
DROP TABLE `audio`;

-- DropTable
DROP TABLE `meetingparticipant`;

-- DropTable
DROP TABLE `organization`;

-- DropTable
DROP TABLE `transcript`;

-- DropTable
DROP TABLE `userrole`;

-- DropTable
DROP TABLE `userroleassignment`;

-- CreateIndex
CREATE UNIQUE INDEX `User_user_id_key` ON `User`(`user_id`);

-- AddForeignKey
ALTER TABLE `Meeting` ADD CONSTRAINT `Meeting_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
