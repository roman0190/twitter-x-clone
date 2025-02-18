import Feed from "@/components/Feed";
import Image from "@/components/Image";
import Link from "next/link";
import React from "react";

const UserPage = () => {
  return (
    <div className="">
      {/* {PROFILE TITLE} */}
      <div className="flex items-center gap-8 p-4 sticky top-0 bg-[#00000084] z-10 backdrop-blur-md">
        <Link href={"/"}>
          <Image path="icons/back.svg" alt="back" h={24} w={24} />
        </Link>
        <h1 className="font-bold text-lg">Roman Howladar</h1>
      </div>
      {/* INFO */}
      <div className="">
        {/* COVER AND AVATAR CONTAINER */}
        <div className="relative w-full">
          {/* COVER */}
          <div className=" relative w-full aspect-[3/1] ">
            <Image
              path="general/cover.jpeg"
              alt="back"
              h={200}
              w={600}
              tr={true}
            />
          </div>
          {/* AVATAR */}
          <div className=" absolute left-4 -translate-y-1/2 w-1/6 aspect-square rounded-full overflow-hidden border-4 border-black  bg-gray-300">
            <Image
              path="general/avatar.png"
              alt="back"
              h={100}
              w={100}
              tr={true}
            />
          </div>
        </div>
        {/* USER INTERECTION */}
        <div className="flex justify-end items-center p-2 gap-2 w-full">
          <div className="flex items-center justify-center rounded-full w-9 h-9 border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/more.svg" alt="" h={20} w={20} />
          </div>
          <div className="flex items-center justify-center rounded-full w-9 h-9 border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/explore.svg" alt="" h={20} w={20} />
          </div>
          <div className="flex items-center justify-center rounded-full w-9 h-9 border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/message.svg" alt="" h={20} w={20} />
          </div>
          <button className="py-2 px-4 bg-white text-black font-bold rounded-full">
            Follow
          </button>
        </div>
        {/* USER DETAILS */}
        <div className="p-4 flex flex-col gap-2">
          {/* USERNAME & HANDLE  */}
          <div>
            <h1 className="text-2xl font-bold">Roman Howladar</h1>
            <span className="text-textGray text-sm">@roman841</span>
          </div>
          {/* BIO */}
          <p>
            Yesterday is history Tomorrow is a mystery but today is a gift
            that's why it's called present.
          </p>
          {/* JOB & LOCATION & DATE */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <Image path="icons/userLocation.svg" alt="" h={20} w={20} />
              <span>Dhaka</span>
            </div>
            <div className="flex items-center gap-2">
              <Image path="icons/userLocation.svg" alt="" h={20} w={20} />
              <span>Joined Jan 2025</span>
            </div>
          </div>
          {/* FOLLOWER & FOLLOWING */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold"> 100</span>
              <span className="text-textGray text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold"> 30</span>
              <span className="text-textGray text-[15px]">Followings</span>
            </div>
          </div>
        </div>
      <Feed />
      </div>
      {/* POSTS */}
    </div>
  );
};

export default UserPage;
