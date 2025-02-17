import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-evenly md:justify-between text-textGray font-bold border-b-[1px] border-borderGray px-4 pt-4">
        <Link href={"/"} className="pb-3 flex items-center border-b-4 border-iconBlue">For you</Link>
        <Link href={"/"} className="pb-3 flex items-center  ">Next.js</Link>
        <Link href={"/"} className="hidden  pb-3 md:flex items-center  ">React.js</Link>
        <Link href={"/"} className="hidden  pb-3 md:flex items-center  ">Javascript</Link>
        <Link href={"/"} className="hidden  pb-3 md:flex items-center  ">Following</Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
}
