/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Faculty` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `NonTeachingStaff` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Faculty` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `NonTeachingStaff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Faculty" ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "NonTeachingStaff" ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Faculty_username_key" ON "Faculty"("username");

-- CreateIndex
CREATE UNIQUE INDEX "NonTeachingStaff_username_key" ON "NonTeachingStaff"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Student_username_key" ON "Student"("username");
