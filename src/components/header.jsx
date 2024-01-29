import React from "react";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between p-4">
      <div className="text-white font-normal text-[18px]">
        {/* Navigation Links */}
        <span className="mx-2">Home</span>
        <span className="mx-2">About</span>
        <span className="mx-2">Projects</span>
      </div>
      <div className="text-white">FHS Coding Club</div>
    </div>
  );
};

export default Header;
