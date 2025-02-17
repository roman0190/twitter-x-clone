"use client";
import React, { useState } from "react";
import Image from "./Image";
import NextImage from "next/image";
import { shareAction } from "@/actions";
import ImageEditor from "./ImageEditor";
import { SettingsType } from "@/app/lib/types/SettingsType";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [settings, setSettings] = useState<SettingsType>({
    type: "original",
    sensitive: false,
  });

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };
  const previewURL = media ? URL.createObjectURL(media) : null;
  return (
    <form
      className="p-4 flex gap-4"
      action={(formData) => {
        shareAction(formData, settings);
      }}
    >
      {/* AVATAR */}
      <div className=" relative w-10 h-10 rounded-full overflow-hidden">
        <Image
          path="general/avatar.png"
          alt="avatar"
          w={100}
          h={100}
          tr={true}
        />
      </div>
      {/* SHARE INPUT */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          name="desc"
          placeholder="What is happening?!"
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
        />
        {media?.type.includes("image") && previewURL && (
          <div className="relative rounded-xl overflow-hidden">
            <NextImage
              src={previewURL}
              alt=""
              width={600}
              height={600}
              className={`w-full ${
                settings.type === "original"
                  ? "h-full object-contain"
                  : settings.type === "square"
                  ? "aspect-square object-cover"
                  : "aspect-video object-cover"
              }`}
            />
            <div
              className=" absolute top-2 right-2 bg-black/50 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer text-sm font-bold"
              onClick={() => setMedia(null)}
            >
              {" "}
              X
            </div>

            <div
              onClick={() => setIsEditorOpen(true)}
              className=" absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 font-bold text-sm rounded-full cursor-pointer "
            >
              Edit
            </div>
          </div>
        )}
        {media?.type.includes("video") && previewURL && (
          <div className=" relative">
            <video src={previewURL} controls></video>
            <div
              className=" absolute top-2 right-2 bg-black/50 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer text-sm font-bold"
              onClick={() => setMedia(null)}
            >
              {" "}
              X
            </div>
          </div>
        )}
        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              name="file"
              onChange={handleMediaChange}
              id="file"
              className="hidden"
              accept="image/*, video/*"
            />
            <label htmlFor="file">
              <Image
                path="icons/image.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
            </label>
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
          <button className="bg-white text-black font-bold rounded-full py-2 px-4">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
