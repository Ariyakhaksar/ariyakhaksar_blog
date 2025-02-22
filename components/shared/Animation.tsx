"use client"
import React from 'react'
import Lottie from "lottie-react";
import ComputerRetro from "@/public/assets/Animation-Computer-retro.json";
import ResponsiveCode from "@/public/assets/Responsive-Code-Animation.json";

type Props = {}

const Animation = (props: Props) => {
  return (
    <Lottie animationData={ResponsiveCode} loop={true} />
  )
}

export default Animation