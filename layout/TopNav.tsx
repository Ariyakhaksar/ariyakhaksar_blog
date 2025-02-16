import React from "react";
import { RiShareLine } from "react-icons/ri";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import ShareButton from "@/components/shared/ShareButton";
import ChangeMode from "@/components/shared/ChangeMode";

type Props = {};

const TopNav = (props: Props) => {
  return (
    <div className="w-1/2 border dark:border-zinc-100 border-zinc-900 rounded-xl backdrop-blur-sm p-5 m-auto fixed left-1/2 -translate-x-1/2 z-20 flex justify-between items-center">
      <div className="text-xl font-bold">
        <span className="dark:text-orange-300 text-orange-500">Ariya</span> Khaksar
      </div>
      <div className="TopNavList">
        <ul>
          <li>
            <Link href={"/#"}>Home</Link>
            <span></span>
          </li>
          <li>
            <Link href={"/#"}>About</Link>
            <span></span>
          </li>
          <li>
            <Link href={"/#"}>Skill</Link>
            <span></span>
          </li>
          <li>
            <Link href={"/#"}>Protfolio</Link>
            <span></span>
          </li>
          <li>
            <Link href={"/#"}>Blog</Link>
            <span></span>
          </li>
          <li>
            <Link href={"/#"}>Contact Me</Link>
            <span></span>
          </li>
        </ul>
      </div>
      <div className="flex flex-row items-center gap-5">
        <ChangeMode />
        <ShareButton />
      </div>
    </div>
  );
};

export default TopNav;
