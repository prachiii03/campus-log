/*
  Warnings:

  - A unique constraint covering the columns `[subject_id]` on the table `Subject` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "StudyMaterial_subject_id_key";

-- DropIndex
DROP INDEX "Syllabus_subject_id_key";

-- CreateTable
CREATE TABLE "prn_table" (
    "prn" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "prn_table_pkey" PRIMARY KEY ("prn")
);

-- CreateIndex
CREATE UNIQUE INDEX "prn_table_email_key" ON "prn_table"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_subject_id_key" ON "Subject"("subject_id");
