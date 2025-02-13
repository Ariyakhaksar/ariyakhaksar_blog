"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorDotOutline = useRef<HTMLDivElement | null>(null);
  const cursorDot = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const cursorVisible = useRef(false);
  const cursorEnlarged = useRef(false);

  const onMouseMove = (event: MouseEvent) => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
    positionDot(event);
  };

  const onMouseEnter = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const onMouseLeave = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const onMouseDown = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const onMouseUp = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const onResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    window.addEventListener("resize", onResize);
    requestRef.current = requestAnimationFrame(animateDotOutline);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", onResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  let { x, y } = mousePosition;
  const winDimensions = { width, height };
  let endX = winDimensions.width ? winDimensions.width / 2 : 0;
  let endY = winDimensions.height ? winDimensions.height / 2 : 0;

  function positionDot(e: MouseEvent) {
    cursorVisible.current = true;
    toggleCursorVisibility();
    endX = e.pageX;
    endY = e.pageY;
    if (cursorDot.current) {
      cursorDot.current.style.top = `${endY}px`;
      cursorDot.current.style.left = `${endX}px`;
    }
  }

  function toggleCursorVisibility() {
    if (cursorDot.current && cursorDotOutline.current) {
      const opacity = cursorVisible.current ? "1" : "0";
      cursorDot.current.style.opacity = opacity;
      cursorDotOutline.current.style.opacity = opacity;
    }
  }

  function toggleCursorSize() {
    if (cursorDot.current && cursorDotOutline.current) {
      if (cursorEnlarged.current) {
        cursorDot.current.style.transform = "translate(-50%, -50%) scale(0.7)";
        cursorDotOutline.current.style.transform = "translate(-50%, -50%) scale(5)";
      } else {
        cursorDot.current.style.transform = "translate(-50%, -50%) scale(1)";
        cursorDotOutline.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
    }
  }

  const animateDotOutline = (time: number) => {
    if (previousTimeRef.current !== null) {
      x += (endX - x) / 8;
      y += (endY - y) / 8;
      if (cursorDotOutline.current) {
        cursorDotOutline.current.style.top = `${y}px`;
        cursorDotOutline.current.style.left = `${x}px`;
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    <>
      <div
        ref={cursorDotOutline}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-transform duration-150 ease-in-out mix-blend-difference pointer-events-none z-50 w-1 h-1 bg-[#cbd5e0]"
      />
      <div
        ref={cursorDot}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-solid border-[#cbd5e0] rounded-full opacity-0 transition-transform duration-150 ease-in-out mix-blend-difference pointer-events-none z-50 w-8 h-8"
      />
    </>
  );
}
