"use client";
import React from "react";
import { Button } from "../ui/button";
import { FaBars } from "react-icons/fa";

type Props = {};

const TopNavMobileButton = (props: Props) => {
  return (
    <div className="md:hidden">
      <Button variant={"iconStyle"} size={"icon"}>
        <FaBars />
      </Button>
    </div>
  );
};

export default TopNavMobileButton;
