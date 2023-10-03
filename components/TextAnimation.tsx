"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextAnimation = ({ sequence }:any) => {
  return (
    <>
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </>
  );
};

export default TextAnimation;
