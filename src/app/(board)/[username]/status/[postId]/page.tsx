import Link from "next/link";
import React from "react";
import Image from "@/components/Image";
import Post from "@/components/Post";
import Comments from "@/components/Comments";
const StatusPage = () => {
  return (
    <div>
      <div className="flex items-center gap-8 p-4 sticky top-0 bg-[#00000084] z-10 backdrop-blur-md">
        <Link href={"/"}>
          <Image path="icons/back.svg" alt="back" h={24} w={24} />
        </Link>
        <h1 className="font-bold text-lg">Post</h1>
      </div>
      <Post type ="status"/>
      <Comments />
    </div>
  );
};

export default StatusPage;
