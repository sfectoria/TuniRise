"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { FaDribbble, FaTwitter } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Heading from "../Heading";
const teamMembers = [
  {
    name: "Bessma KRAIEM",
    title: "Sales Manager",
    image: "/team/bassma.jpg",
  },
  {
    name: "Khalil KRAIEM",
    title: "Manager",
    image:"/team/khalil.jpg",
  },
  {
    name: "Chourouk DERBEL",
    title: "Media project manager",
    image: "/team/chourouk.jpg",
  },
  {
    name: "Faycel BOUAGGA",
    title: "Media Technicien",
    image: "/team/faycel.jpg",
  },
  {
    name: "Farouk MESTIRI",
    title: "Deputy manager",
    image:
      "https://images.unsplash.com/photo-1602434228300-a645bce6891b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1639&q=80",
  },
  {
    name: "Rania ELOUNI",
    title: "It project manager",
    image:
      "https://images.unsplash.com/photo-1602434228300-a645bce6891b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1639&q=80",
  },
];
function Team() {
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
      data-aos="fade-right"
      className=" mx-auto xl:container md:container sm:container  lg:pb-48 pb-24"
    >
      <div className="mx-2 ">
        <div className="lg:mb-24">
          {" "}
          <Heading tit1="OUR TEAM" tit2="OUR TEAM" />
        </div>

        <div
          className="  max-w-7xl items-center -ml-2 sm:-ml-0"
          data-aos="fade-right"
        >
          <Swiper
            slidesPerView={1}
            breakpoints={{
              390: { slidesPerView: 1 },
              617: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            spaceBetween={25}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            className=""
          >
            {teamMembers.map((elem, i) => (
              <SwiperSlide className="swiper-slide">
                <div className="space-y-4 w-[320px] h-[320px] sm:h-full sm:w-full ">
                  <div className="  aspect-[3/2] p-2 overflow-hidden border rounded-3xl border-primary">
                    <Image
                      className="object-cover w-full h-full rounded-xl"
                      src={elem.image}
                      alt={elem.name}
                      width={1080}
                      height={720}
                      layout="responsive"
                    />
                  </div>
                  <div className="inline-flex items-start justify-between w-full">
                    <div className="space-y-1">
                      <h3
                        className="leading-6 text-primary"
                        style={{ fontSize: "1.3rem" }}
                      >
                        {elem.name}
                      </h3>
                      <p
                        className="text-gray-800"
                        style={{ fontSize: "0.8rem" }}
                      >
                        {elem.title}
                      </p>
                    </div>
                    <div>
                      <ul role="list" className="flex space-x-4">
                        <li>
                          <a href="#_" className="text-primary">
                            <FaDribbble
                              name="logo-dribbble"
                              role="img"
                              className="md hydrated"
                              aria-label="logo dribbble"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#_" className="text-primary">
                            <span className="sr-only"> Twitter </span>
                            <FaTwitter
                              name="logo-twitter"
                              role="img"
                              className="md hydrated"
                              aria-label="logo twitter"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Team;
