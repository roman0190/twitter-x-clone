import React from "react";
import Image from "./Image";
import Link from "next/link";
const PopularTags = () => {
  return (
    <div className="flex flex-col gap-4 p-4 border-[1px] border-borderGray rounded-2xl">
      <h1 className="text-textGrayLight text-xl font-bold ">
        {"What's "}Happening
      </h1>
      {/* TREND EVENT */}
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image
            path="/general/event.jpeg"
            alt="alt"
            w={120}
            h={120}
            tr={true}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-textGrayLight">
            Dinner event at Hogwords
          </h2>
          <span className="text-sm text-textGray">Last Night</span>
        </div>
      </div>
      {/* TOPICS */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-textGray">Technology • Trending</span>
          <Image
            path="icons/infoMore.svg"
            alt="info"
            w={16}
            h={16}
            className="cursor-pointer"
          />
        </div>
        <h1 className="font-bold text-textGrayLight">OpenAI</h1>
        <span className="text-sm text-textGray">100K posts</span>
      </div>
      {/* TOPICS */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-textGray">Technology • Trending</span>
          <Image
            path="icons/infoMore.svg"
            alt="info"
            w={16}
            h={16}
            className="cursor-pointer"
          />
        </div>
        <h1 className="font-bold text-textGrayLight">OpenAI</h1>
        <span className="text-sm text-textGray">100K posts</span>
      </div>
      {/* TOPICS */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-textGray">Technology • Trending</span>
          <Image
            path="icons/infoMore.svg"
            alt="info"
            w={16}
            h={16}
            className="cursor-pointer"
          />
        </div>
        <h1 className="font-bold text-textGrayLight">OpenAI</h1>
        <span className="text-sm text-textGray">100K posts</span>
      </div>
      {/* TOPICS */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-textGray">Technology • Trending</span>
          <Image
            path="icons/infoMore.svg"
            alt="info"
            w={16}
            h={16}
            className="cursor-pointer"
          />
        </div>
        <h1 className="font-bold text-textGrayLight">OpenAI</h1>
        <span className="text-sm text-textGray">100K posts</span>
      </div>
      <Link href="/" className="text-iconBlue">
        Show more
      </Link>
    </div>
  );
};

export default PopularTags;
