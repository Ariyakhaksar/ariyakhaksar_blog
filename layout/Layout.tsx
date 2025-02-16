"use client";

import AnimatedLine from "@/components/ui/AnimatedLine";
import React from "react";
import TopNav from "./TopNav";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full">
      <div className="relative pt-10 minfo__app max-xl:pt-20">
        <div className="max-lg:px-4">
          {/*
            <MobileMenuBar toggleDrawer={toggleDrawer} />
            <MobileNav isOpen={isOpen} toggleDrawer={toggleDrawer} />
            <SidebarProfile />
            <RightNav midContainer={midContainer} /> 
            */}
          <TopNav />
          <div className="relative mx-auto max-w-container xl:max-2xl:max-w-65rem">{children}</div>
        </div>
      </div>
      <AnimatedLine />
    </div>
  );
};

export default Layout;
