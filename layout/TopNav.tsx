import React from "react";
import { RiShareLine } from "react-icons/ri";
import Link from "next/link";
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";

type Props = {};

const TopNav = (props: Props) => {
  return (
    <div className="w-1/2 border rounded-xl  backdrop-blur-sm p-5 m-auto fixed left-1/2 -translate-x-1/2 z-20 flex justify-between items-center">
      <div className="text-xl font-bold">
        <span className="text-orange-300">Ariya</span> Khaksar
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
      <div className="relative">
        <div className="bg-zinc-800 p-3 text-lg rounded-full hover:bg-orange-300 hover:text-zinc-800 transition-all ease-in-out cursor-pointer">
          <RiShareLine />
        </div>
        <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-zinc-800 p-3 px-5 rounded-xl flex gap-5">
            <span><FaInstagram /></span>
            <span><FaLinkedin /></span>
            <span><MdContentCopy /></span>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
