"use client";
import React from "react";
import { IKVideo } from "imagekitio-next";
import { VideoType } from "@/app/lib/types/VideoType";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Video = ({ path, className }: VideoType) => {
  return (
    <IKVideo
      urlEndpoint={urlEndpoint}
      path={path}
      className={className}
      transformation={[{ width: "1920", height: "1080",q: "90" }]}
      controls={true}
    />
  );
};

export default Video;
