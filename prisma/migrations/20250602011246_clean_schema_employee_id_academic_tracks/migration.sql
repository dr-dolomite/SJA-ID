-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'PRINCIPAL', 'TEACHER', 'REGISTRAR', 'SCHOOL_ADMIN');

-- CreateEnum
CREATE TYPE "AcademicTrack" AS ENUM ('STEM', 'ABM', 'HUMSS', 'GAS', 'TVL', 'ARTS_DESIGN', 'SPORTS');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "employeeId" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "studentId" TEXT NOT NULL,
    "studentLrn" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" TEXT,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contactNumber" TEXT,
    "guardianName" TEXT NOT NULL,
    "guardianContact" TEXT NOT NULL,
    "yearLevel" INTEGER NOT NULL,
    "section" TEXT NOT NULL,
    "academicTrack" "AcademicTrack" NOT NULL,
    "enrollmentStatus" TEXT NOT NULL,
    "enrollmentDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "subjectCode" TEXT NOT NULL,
    "subjectName" TEXT NOT NULL,
    "description" TEXT,
    "yearLevel" INTEGER NOT NULL,
    "academicTrack" "AcademicTrack",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentSubject" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,
    "academicYear" TEXT NOT NULL,
    "semester" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudentSubject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeacherSubject" (
    "id" SERIAL NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,
    "academicYear" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeacherSubject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grade" (
    "id" SERIAL NOT NULL,
    "studentSubjectId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "term" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "letterGrade" TEXT,
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Grade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityLog" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "action" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" INTEGER NOT NULL,
    "ipAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ActivityLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_employeeId_key" ON "User"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_studentId_key" ON "Student"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_studentLrn_key" ON "Student"("studentLrn");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_subjectCode_key" ON "Subject"("subjectCode");

-- CreateIndex
CREATE UNIQUE INDEX "StudentSubject_studentId_subjectId_academicYear_key" ON "StudentSubject"("studentId", "subjectId", "academicYear");

-- CreateIndex
CREATE UNIQUE INDEX "TeacherSubject_teacherId_subjectId_academicYear_key" ON "TeacherSubject"("teacherId", "subjectId", "academicYear");

-- CreateIndex
CREATE UNIQUE INDEX "Grade_studentSubjectId_term_key" ON "Grade"("studentSubjectId", "term");

-- AddForeignKey
ALTER TABLE "StudentSubject" ADD CONSTRAINT "StudentSubject_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentSubject" ADD CONSTRAINT "StudentSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherSubject" ADD CONSTRAINT "TeacherSubject_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherSubject" ADD CONSTRAINT "TeacherSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_studentSubjectId_fkey" FOREIGN KEY ("studentSubjectId") REFERENCES "StudentSubject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityLog" ADD CONSTRAINT "ActivityLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
