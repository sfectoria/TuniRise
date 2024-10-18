"use client";
import React from "react";
import "../styles/globals.css";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import ProgressSlider from "@/components/home/Famille";
import Work from "@/components/home/Work";
import Reviews from "@/components/home/Reviews";
import Partnaires from "@/components/home/Partnaires";
import Stars from "@/components/home/Stars";
import Faqs from "@/components/home/Faqs";


const page = () => {
  return (
    <div className=" no-scrollbar overflow-y-scroll  overflow-x-hidden  ">
      {/* <Hero /> */}
      <About />
      <div className="xl:mt-[19rem] lg:mt-[11rem]">
        <Services />
      </div>
      {/* <ProgressSlider /> */}
      {/* <Work /> */}
      <Faqs/>
      <div className="lg:mb-48 mb-24">
        <Stars />{" "}
      </div>
      <Reviews />
      {/* <Partnaires /> */}
   
    </div>
  );
};

export default page;
