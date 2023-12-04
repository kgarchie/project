/*
  Warnings:

  - You are about to drop the column `createdAt` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `hostId` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `keywords` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `summary` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `transcript` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `meeting` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `user` table. All the data in the column will be lost.
  - Added the required column `duration` to the `Meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `Meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizer_id` to the `Meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topic` to the `Meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `meeting` DROP FOREIGN KEY `Meeting_hostId_fkey`;

-- DropIndex
DROP INDEX `User_user_id_key` ON `user`;

-- AlterTable
ALTER TABLE `meeting` DROP COLUMN `createdAt`,
    DROP COLUMN `hostId`,
    DROP COLUMN `keywords`,
    DROP COLUMN `summary`,
    DROP COLUMN `transcript`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `duration` INTEGER NOT NULL,
    ADD COLUMN `notes` VARCHAR(191) NOT NULL,
    ADD COLUMN `organizer_id` INTEGER NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL,
    ADD COLUMN `time` DATETIME(3) NOT NULL,
    ADD COLUMN `topic` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `createdAt`,
    DROP COLUMN `name`,
    DROP COLUMN `updatedAt`,
    DROP COLUMN `user_id`,
    ADD COLUMN `first_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `last_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `organization_id` INTEGER NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Organization` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserRole` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserRoleAssignment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `role_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MeetingParticipant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `meeting_id` INTEGER NOT NULL,
    `role` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attachment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `location_url` VARCHAR(191) NOT NULL,
    `meeting_id` INTEGER NOT NULL,
    `uploader_id` INTEGER NOT NULL,
    `upload_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Audio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `meeting_id` INTEGER NOT NULL,
    `location_url` VARCHAR(191) NOT NULL,
    `duration` INTEGER NOT NULL,
    `upload_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transcript` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `meeting_id` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `timestamp` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_organization_id_fkey` FOREIGN KEY (`organization_id`) REFERENCES `Organization`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserRoleAssignment` ADD CONSTRAINT `UserRoleAssignment_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserRoleAssignment` ADD CONSTRAINT `UserRoleAssignment_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `UserRole`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Meeting` ADD CONSTRAINT `Meeting_organizer_id_fkey` FOREIGN KEY (`organizer_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MeetingParticipant` ADD CONSTRAINT `MeetingParticipant_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MeetingParticipant` ADD CONSTRAINT `MeetingParticipant_meeting_id_fkey` FOREIGN KEY (`meeting_id`) REFERENCES `Meeting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attachment` ADD CONSTRAINT `Attachment_meeting_id_fkey` FOREIGN KEY (`meeting_id`) REFERENCES `Meeting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attachment` ADD CONSTRAINT `Attachment_uploader_id_fkey` FOREIGN KEY (`uploader_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Audio` ADD CONSTRAINT `Audio_meeting_id_fkey` FOREIGN KEY (`meeting_id`) REFERENCES `Meeting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transcript` ADD CONSTRAINT `Transcript_meeting_id_fkey` FOREIGN KEY (`meeting_id`) REFERENCES `Meeting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
