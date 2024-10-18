"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import { Eye, Target ,Telescope } from "lucide-react";
import "aos/dist/aos.css";
import Heading from "../Heading";
function Mission() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  const heights = [
    {
      title: "Our Mission",
      description:
        "Is to guide our clients towards excellence by creating memorable experiences.", // Add your mission description here
      icon: <Target className=" text-primary" height={70} width={70} strokeWidth={0.6} />,
    },
    {
      title: "Our Vision",
      description:
        "Is to be recognized as the most creative and professional agency in the market. ",
      icon: <Telescope className=" text-primary" height={70} width={70} strokeWidth={0.6} />,
    },
  ];
  return (
    <section
      className=" mx-auto xl:container md:container sm:container  lg:pb-48 pb-24 pt-24 px-4"
      data-aos="fade-right"
    >
      <div className="mx-2">
        <div className="lg:mb-24">
          <Heading tit1="MISSION & VISION" tit2="MISSION & VISION" />
        </div>
        <div className="flex  flex-wrap xl:justify-between justify-center  gap-32 mx-[20px]  lg:m-0 ">
          {heights.map((elem, i) => (
            <div className="relative h-auto ">
              <div className="md:w-full lg:w-[590px] md:w-[300px] md:h-auto absolute z-10 inset-0 bg-gradient-to-r from-primary to-transparent shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-lg"></div>
              <div className="md:w-full lg:w-[590px] md:h-auto relative z-20 p-6 bg-white md:flex justify-between shadow-lg rounded-lg">
                <div className="sm:flex flex-col justify-between space-y-4 py-4 md:pr-6 w-full">
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="pt-1 text-2xl  text-primary">
                        {elem.title}
                      </h1>
                    </div>
                    <div className="ml-[8rem] text-primary mx-8">
                      {elem.icon}
                    </div>
                  </div>

                  <p className="text-sm">{elem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mission;
