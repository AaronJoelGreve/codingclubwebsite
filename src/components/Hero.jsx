import React from "react";

const Hero = () => {
  return (
    <div className="absolute top-[100px] left-0 w-full">
      <div className="flex justify-around">
        <img
          src="coding-computer-pc-screen-code-icon-193955-1.png"
          alt="Coding computer pc"
          className="w-[341px] h-[333px] object-cover"
        />
        <div className="text-white text-[64px] font-bold">About Us</div>
        <img
          src="computer.png"
          alt="Computer"
          className="w-[280px] h-[271px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
