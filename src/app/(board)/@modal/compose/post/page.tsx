"use client";
import Image from "@/components/Image";
import { useRouter } from "next/navigation";
import React from "react";

const PostModal = () => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };
  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex justify-center ">
      <div className="py-4 px-4 rounded-xl bg-black w-[600px] h-max mt-12">
        {/* TOP */}
        <div className="flex justify-between items-center">
          <div
            className=" cursor-pointer font-bold text-sm"
            onClick={closeModal}
          >
            X
          </div>
          <div className="text-iconBlue font-bold">Drafts</div>
        </div>
        {/* CENTER */}
        <div className="py-8 flex gap-4">
          <div className=" relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              path="general/avatar.png"
              alt="back"
              h={100}
              w={100}
              tr={true}
            />
          </div>
          <input
            type="text"
            placeholder="What is happening?!"
            className=" flex-1 bg-transparent outline-none text-lg"
          />
        </div>
        {/* BOTTOM */}
        <div className="flex items-center justify-between gap-4 flex-wrap border-t border-borderGray pt-4">
          <div className="flex gap-4 flex-wrap">
            <Image
              path="icons/image.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/location.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>
          <button className="py-2 px-5 bg-white text-black font-bold rounded-full">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
