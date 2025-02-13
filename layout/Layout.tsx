"use client";

import AnimatedLine from "@/components/ui/AnimatedLine";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full">
      {children}
      <AnimatedLine />
    </div>
  );
};

export default Layout;
