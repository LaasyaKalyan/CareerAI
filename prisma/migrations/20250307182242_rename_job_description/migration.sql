/*
  Warnings:

  - You are about to drop the column `improvementTips` on the `Assessment` table. All the data in the column will be lost.
  - You are about to drop the column `JobDescription` on the `CoverLetter` table. All the data in the column will be lost.
  - You are about to drop the column `salaryranges` on the `IndustryInsight` table. All the data in the column will be lost.
  - Changed the type of `demandLevel` on the `IndustryInsight` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `marketOutlook` on the `IndustryInsight` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Assessment" DROP COLUMN "improvementTips",
ADD COLUMN     "improvementTip" TEXT;

-- AlterTable
ALTER TABLE "CoverLetter" DROP COLUMN "JobDescription",
ADD COLUMN     "jobDescription" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'draft';

-- AlterTable
ALTER TABLE "IndustryInsight" DROP COLUMN "salaryranges",
ADD COLUMN     "salaryRanges" JSONB[],
DROP COLUMN "demandLevel",
ADD COLUMN     "demandLevel" TEXT NOT NULL,
DROP COLUMN "marketOutlook",
ADD COLUMN     "marketOutlook" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Resume" ADD COLUMN     "atsScore" DOUBLE PRECISION,
ADD COLUMN     "feedback" TEXT;

-- DropEnum
DROP TYPE "DemandLevel";

-- DropEnum
DROP TYPE "MarketOutlook";
