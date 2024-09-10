-- CreateTable
CREATE TABLE "prn_table" (
    "prn" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "is_registerd" BOOLEAN NOT NULL,

    CONSTRAINT "prn_table_pkey" PRIMARY KEY ("prn")
);

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

-- CreateIndex
CREATE UNIQUE INDEX "prn_table_email_key" ON "prn_table"("email");
