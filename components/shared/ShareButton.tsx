"use client";

import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { RiShareLine } from "react-icons/ri";
import { Button } from "../ui/button";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const ShareButton = () => {
  return (
    <DropdownMenu.Root>
      {/* دکمه اصلی */}
      <DropdownMenu.Trigger asChild>
        <Button variant="iconStyle" size="icon">
          <RiShareLine />
        </Button>
      </DropdownMenu.Trigger>

      {/* محتوای باکس اشتراک‌گذاری */}
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="center"
          side="bottom" // مکان باکس
          sideOffset={10} // فاصله از دکمه
          className="z-50 bg-zinc-100 dark:bg-zinc-900 p-2 px-3 rounded-md shadow-md border border-zinc-800 dark:border-zinc-100 flex items-center justify-center gap-2
          
          data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          <DropdownMenu.Item asChild>
            <Button variant="ghost" size="iconp2">
              <FaInstagram />
            </Button>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Button variant="ghost" size="iconp2">
              <FaLinkedin />
            </Button>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Button variant="ghost" size="iconp2">
              <MdContentCopy />
            </Button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ShareButton;
