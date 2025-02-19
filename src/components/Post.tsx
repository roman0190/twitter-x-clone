import React from "react";
import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import { imagekit } from "@/app/utils/imagekitUlits";
import Video from "./Video";
import { FileDetailsType } from "@/app/lib/types/FileDetailsType";
import Link from "next/link";
const Post = async ({ type }: { type?: "status" | "comment" }) => {
  const getFileDetails = async (FileId: string): Promise<FileDetailsType> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(FileId, function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result as FileDetailsType);
        }
      });
    });
  };

  const fileDetails = await getFileDetails("67b35394432c476416494134");
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* POST TYPE */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        {/* RESPOST ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            className="fill-textGray"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Roman reposted</span>
      </div>
      {/* CONTENT SECTION */}
      <div className={`flex gap-4 ${type === "status" && "flex-col"}`}>
        {/* AVATAR */}
        <div
          className={`relative w-10 h-10 rounded-full overflow-hidden ${
            type === "status" && "hidden"
          }`}
        >
          <Image
            path="/general/avatar.png"
            alt="alt"
            w={100}
            h={100}
            tr={true}
            className="object-cover"
          />
        </div>
        {/* CONTENT */}
        <div className="flex flex-col flex-1 gap-2">
          <div className="w-full flex justify-between">
            {/* TOP */}
            <Link href={"/roman841"} className="flex gap-2">
              {/* AVATAR */}
              <div
                className={`relative w-10 h-10 rounded-full overflow-hidden ${
                  type !== "status" && "hidden"
                }`}
              >
                <Image
                  path="/general/avatar.png"
                  alt="alt"
                  w={100}
                  h={100}
                  tr={true}
                  className="object-cover"
                />
              </div>
              <div
                className={`flex items-center flex-wrap gap-2 ${
                  type === "status" && "flex-col gap-0 !items-start"
                }`}
              >
                <h1 className="text-md font-bold">Roman Howladar</h1>
                <span
                  className={`text-textGray ${type === "status" && "text-sm"}`}
                >
                  @roman841
                </span>
                {type !== "status" && (
                  <span className="text-textGray">• 1 Day ago</span>
                )}
              </div>
            </Link>
            <PostInfo />
          </div>
          {/* TEXT & MEDIA */}
          <Link href={"/roman841/status/112"}>
            <p className={`${type === "status" && "text-lg"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              saepe nam laboriosam totam, magni labore molestias ducimus
              cupiditate aspernatur temporibus voluptas voluptatum sequi iusto
              magnam provident reiciendis illum dolorum error.
            </p>
          </Link>
          {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              path={fileDetails.filePath}
              alt=""
              w={fileDetails.width}
              h={fileDetails.height}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          ) : (
            <Video
              path={fileDetails.filePath}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          )}
          {type === "status" && (
            <span className="text-textGray">1 Day ago</span>
          )}
          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
