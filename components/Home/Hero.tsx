"use client";
import React from "react";
import Lottie from "lottie-react";
import ResponsiveCode from "@/public/assets/Responsive-Code-Animation.json";
import ResponsiveCodeL from "@/public/assets/Responsive-Code-Animation-L.json";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-rwo justify-between w-1/2 mx-auto">
      <div>Hi</div>
      <div className="max-w-[500px] ">
        <div className="dark:block hidden">
          <Lottie animationData={ResponsiveCode} loop={true} />
        </div>
        <div className="dark:hidden block">
          <Lottie animationData={ResponsiveCodeL} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
