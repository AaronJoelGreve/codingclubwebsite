import React from "react";
import Header from "./header";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";

export const Desktop = () => {
  return (
    <div className="bg-[#1c1e22] flex flex-row justify-center w-full">
      <div className="bg-[#1c1e22] overflow-hidden border border-solid border-black w-[1920px] h-[4698px] relative">
        <Header />
        <Hero />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
