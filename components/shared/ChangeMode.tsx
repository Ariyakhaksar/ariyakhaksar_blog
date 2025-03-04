"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { RxBlendingMode } from "react-icons/rx";

type Props = {};

const ChangeMode = (props: Props) => {
  const { theme, setTheme } = useTheme(); // استفاده از useTheme برای دسترسی به theme و setTheme

  const handleChange = (newTheme: string) => {
    const validThemes: ThemeTypes[] = ["dark", "light", "system"];

    if (validThemes.includes(newTheme as ThemeTypes)) {
      setTheme(newTheme); // اگر newTheme معتبر باشد، آن را ست می‌کنیم
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="iconStyle" className="bg-orange-100 border border-zinc-900 " size={"icon"}>
          <RxBlendingMode />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 dark:bg-zinc-900 bg-orange-100 text-zinc-800 dark:text-zinc-100">
        <DropdownMenuRadioGroup value={theme as ThemeTypes} onValueChange={handleChange}>
          <DropdownMenuRadioItem value="dark" className="DropdownMenuRadioItemStyle">
            Dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="light" className="DropdownMenuRadioItemStyle">
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system" className="DropdownMenuRadioItemStyle">
            System
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChangeMode;
