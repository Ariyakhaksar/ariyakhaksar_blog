"use client";
import React from "react";
import Lottie from "lottie-react";
import ResponsiveCode from "@/public/assets/Responsive-Code-Animation.json";
import ResponsiveCodeL from "@/public/assets/Responsive-Code-Animation-L.json";
import AnimationComputerRetro from "@/public/assets/Animation-Computer-retro.json";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative flex flex-row items-center justify-center w-full lg:w-3/4 mx-auto">
      <div
        className="lg:mt-20 flex flex-col gap-5 lg:w-2/4 p-5 
        items-center text-center rounded-lg backdrop-blur-sm
        bg-opacity-10"
      >
        <h1 className="lg:text-8xl font-bold">
          I code
          {/* I build, I learn! */}
        </h1>
        <p className="lg:text-lg">
          I'm a front-end developer building fast, modern, and scalable websites using React, Next.js, and TypeScript.
          I'm passionate about clean code, optimized architecture, and improving web application performance. My focus
          is on developing interactive user interfaces, efficient data management, and implementing best practices in
          coding to create high-quality products
        </p>
      </div>
      <div
        className="absolute lg:-top-24 flex flex-col lg:flex-row items-center justify-between pt-20 
        w-3/2 -z-10 opacity-20"
      >
        <div className="dark:block hidden lg:w-1/2">
          <Lottie animationData={ResponsiveCode} loop={true} />
        </div>
        <div className="dark:hidden block lg:w-1/2">
          <Lottie animationData={ResponsiveCodeL} loop={true} />
        </div>
        <div className="mt-10 lg:w-1/2">
          <Lottie animationData={AnimationComputerRetro} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
