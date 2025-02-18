import Link from "next/link";
import React from "react";
import Image from "./Image";

const LeftBar = () => {
  const menuList = [
    {
      id: 1,
      name: "Homepage",
      link: "/",
      icon: "home.svg",
    },
    {
      id: 2,
      name: "Explore",
      link: "/",
      icon: "explore.svg",
    },
    {
      id: 3,
      name: "Notification",
      link: "/",
      icon: "notification.svg",
    },
    {
      id: 4,
      name: "Messages",
      link: "/",
      icon: "message.svg",
    },
    {
      id: 5,
      name: "Bookmarks",
      link: "/",
      icon: "bookmark.svg",
    },
    {
      id: 6,
      name: "Jobs",
      link: "/",
      icon: "job.svg",
    },
    {
      id: 7,
      name: "Communities",
      link: "/",
      icon: "community.svg",
    },
    {
      id: 8,
      name: "Premium",
      link: "/",
      icon: "logo.svg",
    },
    {
      id: 9,
      name: "Profile",
      link: "/",
      icon: "profile.svg",
    },
    {
      id: 10,
      name: "More",
      link: "/",
      icon: "more.svg",
    },
  ];
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pb-8 pt-2">
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* LOGO */}
        <Link href={"/"} className="p-2 rounded-full hover:bg-[#181818]">
          <Image path="icons/logo.svg" alt="alt" w={24} h={24} />
        </Link>
        {/* MANU LIST */}
        <div className="flex flex-col gap-4">
          {menuList.map((menu) => (
            <Link
              href={menu.link}
              key={menu.id}
              className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
            >
              <Image path={`icons/${menu.icon}`} alt="alt" w={24} h={24} />
              <span className="hidden xxl:inline">{menu.name}</span>
            </Link>
          ))}
          {/* BUTTON */}
          <Link
            href={"/"}
            className="text-black bg-white rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
          >
            <Image path="/icons/post.svg" alt="new post" w={24} h={24} />
          </Link>
          <Link
            href={"/"}
            className="hidden xxl:block text-black bg-white rounded-full font-bold py-2 px-20"
          >
            Post
          </Link>
        </div>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <Link href={"/roman841"}>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
              <Image
                path="/general/avatar.png"
                alt="alt"
                w={100}
                h={100}
                tr={true}
                className="object-cover"
              />
            </div>
            <div className="hidden xxl:flex flex-col">
              <span className="font-bold cursor-pointer">Roman Howladar</span>
              <span className="text-sm text-textGray">@roman841</span>
            </div>
          </div>
        </Link>
        <div className="hidden xxl:block cursor-pointer font-[1000] ">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
