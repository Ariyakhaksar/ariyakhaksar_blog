"use client";

import AnimatedLine from "@/ui/AnimatedLine";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      {children}
      <AnimatedLine />
    </div>
  );
};

export default Layout;
