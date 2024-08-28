/*
  Warnings:

  - Added the required column `is_registerd` to the `prn_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "prn_table" ADD COLUMN     "is_registerd" BOOLEAN NOT NULL;
