import React from "react";

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full flex flex-col items-center pb-4">
      <div className="text-white text-[18px]">
        <p>2023 - Coding Club FHS</p>
        <p>NHS Tutor App</p>
        {/* More footer content can be added here */}
      </div>
      <img src="group-1.png" alt="Group" className="w-[256px] h-[57px]" />
      <div className="flex justify-around w-full">
        <p className="text-white text-[18px]">{/* Footer text or links */}</p>
      </div>
    </div>
  );
};

export default Footer;
