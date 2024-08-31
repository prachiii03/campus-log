/*
  Warnings:

  - The primary key for the `Student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `prn` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `rollNo` on the `Student` table. All the data in the column will be lost.
  - Added the required column `address` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `current_semester` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `current_year` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department_id` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `middle_name` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_id` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" DROP CONSTRAINT "Student_pkey",
DROP COLUMN "name",
DROP COLUMN "password",
DROP COLUMN "prn",
DROP COLUMN "rollNo",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "current_semester" TEXT NOT NULL,
ADD COLUMN     "current_year" TEXT NOT NULL,
ADD COLUMN     "department_id" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "middle_name" TEXT NOT NULL,
ADD COLUMN     "student_id" TEXT NOT NULL,
ADD CONSTRAINT "Student_pkey" PRIMARY KEY ("student_id");

-- CreateTable
CREATE TABLE "College" (
    "college_id" TEXT NOT NULL,
    "college_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "principal" TEXT NOT NULL,
    "vice_principal" TEXT NOT NULL,
    "chair_person" JSONB NOT NULL,
    "teaching_staff_count" INTEGER NOT NULL,
    "non_teaching_staff_count" INTEGER NOT NULL,

    CONSTRAINT "College_pkey" PRIMARY KEY ("college_id")
);

-- CreateTable
CREATE TABLE "Department" (
    "department_id" TEXT NOT NULL,
    "department_name" TEXT NOT NULL,
    "hodId" TEXT NOT NULL,
    "student_count" INTEGER NOT NULL,
    "girls" INTEGER NOT NULL,
    "boys" INTEGER NOT NULL,
    "collegeId" TEXT,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("department_id")
);

-- CreateTable
CREATE TABLE "Faculty" (
    "faculty_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "middle_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "highest_education" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact_no" TEXT NOT NULL,
    "department_id" TEXT,

    CONSTRAINT "Faculty_pkey" PRIMARY KEY ("faculty_id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "subject_id" TEXT NOT NULL,
    "subject_name" TEXT NOT NULL,
    "required_hours" TEXT NOT NULL,
    "have_practical" BOOLEAN NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("subject_id")
);

-- CreateTable
CREATE TABLE "Syllabus" (
    "subject_id" TEXT NOT NULL,
    "reference_link" JSONB NOT NULL,
    "practicals" JSONB NOT NULL,
    "faculty_id" TEXT NOT NULL,

    CONSTRAINT "Syllabus_pkey" PRIMARY KEY ("subject_id")
);

-- CreateTable
CREATE TABLE "StudyMaterial" (
    "subject_id" TEXT NOT NULL,
    "notes" TEXT[],
    "exams" JSONB NOT NULL,

    CONSTRAINT "StudyMaterial_pkey" PRIMARY KEY ("subject_id")
);

-- CreateTable
CREATE TABLE "Result" (
    "student_id" TEXT NOT NULL,
    "subject_id" TEXT NOT NULL,
    "gained_marks" INTEGER NOT NULL,
    "total_marks" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "semester_number" INTEGER NOT NULL,
    "academic_year" TEXT NOT NULL,

    CONSTRAINT "Result_pkey" PRIMARY KEY ("student_id","subject_id")
);

-- CreateTable
CREATE TABLE "Attendance" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "subject_id" TEXT NOT NULL,
    "teacher_id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "academic_year" TEXT NOT NULL,
    "semester" INTEGER NOT NULL,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NonTeachingStaff" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "middle_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "department_id" TEXT,

    CONSTRAINT "NonTeachingStaff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DepartmentTeachingStaff" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DepartmentStudents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DepartmentAlumni" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FacultySubjects" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Department_hodId_key" ON "Department"("hodId");

-- CreateIndex
CREATE UNIQUE INDEX "Syllabus_subject_id_key" ON "Syllabus"("subject_id");

-- CreateIndex
CREATE UNIQUE INDEX "StudyMaterial_subject_id_key" ON "StudyMaterial"("subject_id");

-- CreateIndex
CREATE UNIQUE INDEX "_DepartmentTeachingStaff_AB_unique" ON "_DepartmentTeachingStaff"("A", "B");

-- CreateIndex
CREATE INDEX "_DepartmentTeachingStaff_B_index" ON "_DepartmentTeachingStaff"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DepartmentStudents_AB_unique" ON "_DepartmentStudents"("A", "B");

-- CreateIndex
CREATE INDEX "_DepartmentStudents_B_index" ON "_DepartmentStudents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DepartmentAlumni_AB_unique" ON "_DepartmentAlumni"("A", "B");

-- CreateIndex
CREATE INDEX "_DepartmentAlumni_B_index" ON "_DepartmentAlumni"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacultySubjects_AB_unique" ON "_FacultySubjects"("A", "B");

-- CreateIndex
CREATE INDEX "_FacultySubjects_B_index" ON "_FacultySubjects"("B");

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_hodId_fkey" FOREIGN KEY ("hodId") REFERENCES "Faculty"("faculty_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("college_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Syllabus" ADD CONSTRAINT "Syllabus_faculty_id_fkey" FOREIGN KEY ("faculty_id") REFERENCES "Faculty"("faculty_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Syllabus" ADD CONSTRAINT "Syllabus_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Subject"("subject_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyMaterial" ADD CONSTRAINT "StudyMaterial_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Subject"("subject_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Subject"("subject_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Subject"("subject_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Faculty"("faculty_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NonTeachingStaff" ADD CONSTRAINT "NonTeachingStaff_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("department_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentTeachingStaff" ADD CONSTRAINT "_DepartmentTeachingStaff_A_fkey" FOREIGN KEY ("A") REFERENCES "Department"("department_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentTeachingStaff" ADD CONSTRAINT "_DepartmentTeachingStaff_B_fkey" FOREIGN KEY ("B") REFERENCES "Faculty"("faculty_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentStudents" ADD CONSTRAINT "_DepartmentStudents_A_fkey" FOREIGN KEY ("A") REFERENCES "Department"("department_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentStudents" ADD CONSTRAINT "_DepartmentStudents_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("student_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentAlumni" ADD CONSTRAINT "_DepartmentAlumni_A_fkey" FOREIGN KEY ("A") REFERENCES "Department"("department_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentAlumni" ADD CONSTRAINT "_DepartmentAlumni_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("student_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacultySubjects" ADD CONSTRAINT "_FacultySubjects_A_fkey" FOREIGN KEY ("A") REFERENCES "Faculty"("faculty_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacultySubjects" ADD CONSTRAINT "_FacultySubjects_B_fkey" FOREIGN KEY ("B") REFERENCES "Subject"("subject_id") ON DELETE CASCADE ON UPDATE CASCADE;
