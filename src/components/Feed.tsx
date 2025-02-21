import React from "react";
import Post from "./Post";
import { prisma } from "@/app/lib/prisma";

const Feed = async () => {
  const posts = await prisma.post.findMany();
  return (
    <div>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <Post />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
