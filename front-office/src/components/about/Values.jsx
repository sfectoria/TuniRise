"use client";
import React, { useEffect } from "react";
import { Lightbulb ,Users ,Rocket } from 'lucide-react';

import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "../Heading";
function Values() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <section
    className=" mx-auto xl:container md:container sm:container  lg:pb-48 pb-24  "
    data-aos="fade-left"
  >
        <div className="mx-2">
      <div
        // className="w-full flex flex-col items-center "
        data-aos="fade-left"
      >
             <div className="lg:mb-24">  <Heading tit1="OUR VALUES" tit2="OUR VALUES"/></div>

        <section className="flex flex-wrap justify-between items-center  lg:gap-2 gap-10  m-[20px] lg:m-0 ">
          <article className="shadow-xl md:w-full lg:w-[32%]   rounded-2xl p-8 py-12 bg-gradient-to-tr from-primary to-[#fe6e3380]">
            <div className=" text-primary w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="20">
                
                <Lightbulb  strokeWidth={1} />
              </svg>
            </div>
            <span className="inline-flex text-4xl font-caveat bg-clip-text text-transparent bg-gradient-to-r from-[#fff] to-[#fff] mb-2">
            Creativity
              </span>
            <p className="text-sm  text-white">
            By using innovative ideas to design original and aesthetic solutions that captivate and inspire.
            </p>
          </article>

          <article className="rounded-2xl  md:w-full lg:w-[32%]   p-8  py-12  shadow-xl">
            <div className="w-14 h-14 rounded shadow-md bg-primary flex justify-center items-center -rotate-3 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19">
               <Users  strokeWidth={1} color="white"/>
              </svg>
            </div>
            <span className="inline-flex text-4xl font-caveat bg-clip-text text-primary bg-gradient-to-r from-[#fff] to-[#fff] mb-2">
            Commitment
              </span>
            <p className="text-sm text-slate-500 ">
            We are dedicated to keeping our promises and supporting our clients with integrity and devotion.
            </p>
          </article>

          <article className="shadow-xl md:w-full lg:w-[32%]    rounded-2xl p-8  py-12  bg-gradient-to-tr from-primary to-[#fe6e3380] ">
            <div className=" text-primary w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <Rocket strokeWidth={1}/>
              </svg>
            </div>
            <span className="inline-flex text-4xl font-caveat bg-clip-text text-transparent bg-gradient-to-r from-[#fff] to-[#fff] mb-2">

            Innovation              </span>
            <p className="text-sm text-white ">
            We keep our promises with rigor and consistency, always aiming for excellence in every project.
            </p>
          </article>
        </section>
      </div>
    </div>
      </section>
  );
}

export default Values;
