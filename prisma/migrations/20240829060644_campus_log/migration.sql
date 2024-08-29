/*
  Warnings:

  - The primary key for the `Department` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `department_id` column on the `Department` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `department_id` to the `NonTeachingStaff` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `department_id` on the `Student` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_DepartmentAlumni` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_DepartmentStudents` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_DepartmentTeachingStaff` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "NonTeachingStaff" DROP CONSTRAINT "NonTeachingStaff_department_id_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_department_id_fkey";

-- DropForeignKey
ALTER TABLE "_DepartmentAlumni" DROP CONSTRAINT "_DepartmentAlumni_A_fkey";

-- DropForeignKey
ALTER TABLE "_DepartmentStudents" DROP CONSTRAINT "_DepartmentStudents_A_fkey";

-- DropForeignKey
ALTER TABLE "_DepartmentTeachingStaff" DROP CONSTRAINT "_DepartmentTeachingStaff_A_fkey";

-- AlterTable
ALTER TABLE "Department" DROP CONSTRAINT "Department_pkey",
DROP COLUMN "department_id",
ADD COLUMN     "department_id" SERIAL NOT NULL,
ADD CONSTRAINT "Department_pkey" PRIMARY KEY ("department_id");

-- AlterTable
ALTER TABLE "NonTeachingStaff" DROP COLUMN "department_id",
ADD COLUMN     "department_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "department_id",
ADD COLUMN     "department_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "_DepartmentAlumni" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "_DepartmentStudents" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "_DepartmentTeachingStaff" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "_DepartmentAlumni_AB_unique" ON "_DepartmentAlumni"("A", "B");

-- CreateIndex
CREATE UNIQUE INDEX "_DepartmentStudents_AB_unique" ON "_DepartmentStudents"("A", "B");

-- CreateIndex
CREATE UNIQUE INDEX "_DepartmentTeachingStaff_AB_unique" ON "_DepartmentTeachingStaff"("A", "B");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NonTeachingStaff" ADD CONSTRAINT "NonTeachingStaff_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentTeachingStaff" ADD CONSTRAINT "_DepartmentTeachingStaff_A_fkey" FOREIGN KEY ("A") REFERENCES "Department"("department_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentStudents" ADD CONSTRAINT "_DepartmentStudents_A_fkey" FOREIGN KEY ("A") REFERENCES "Department"("department_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentAlumni" ADD CONSTRAINT "_DepartmentAlumni_A_fkey" FOREIGN KEY ("A") REFERENCES "Department"("department_id") ON DELETE CASCADE ON UPDATE CASCADE;
