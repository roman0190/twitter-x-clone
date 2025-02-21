/*
  Warnings:

  - You are about to drop the `SavePost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SavePost" DROP CONSTRAINT "SavePost_postId_fkey";

-- DropForeignKey
ALTER TABLE "SavePost" DROP CONSTRAINT "SavePost_userId_fkey";

-- DropTable
DROP TABLE "SavePost";

-- CreateTable
CREATE TABLE "savedPosts" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "savedPosts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "savedPosts" ADD CONSTRAINT "savedPosts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savedPosts" ADD CONSTRAINT "savedPosts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
