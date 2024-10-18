"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import {
  RiArrowDownSLine,
  RiRocketFill,
  RiLightbulbFlashFill,
  RiHeartFill,
} from "react-icons/ri";

import DevImg from "../components/DevImg";
import Badge from "../components/Badge";
import Socials from "../components/Socials";
import AOS from "aos";
import "aos/dist/aos.css";

// components
import Logo from "../components/Logo";
// import ThemeToggler from './ThemeToggler';
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import { usePathname } from "next/navigation";
const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  const isAboutPage = pathname === "/propos";

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        location.pathname === "/" || location.pathname === "/propos"
          ? "bg-hero bg-no-repeat bg-bottom bg-cover"
          : ""
      } overflow-x-hidden `}
    >
      <header
        className={`${
          header ? "py-4 shadow-lg backdrop-blur-lg" : "py-6 "
        }  fixed w-full top-0 z-10 transition-all '} `}
      >
        <div className="mx-auto max-w-[86rem] px-4">
          <div className="flex justify-between items-center ">
            <Logo />
            <div className="flex items-center gap-x-6">
              {/* nav */}
              <Nav
                containerStyles="hidden xl:flex gap-x-8 items-center"
                linkStyles="relative hover:text-primary transition-all"
                underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
              />
              {/* <ThemeToggler /> */}
              {/* mobile nav */}
              <div className="xl:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </header>
      {pathname === "/" && (
        <section
          className="py-12 mt-16 xl:py-10 lg:h-[84vh]  min-h-full dark:bg-none"
          data-aos="fade-right"
        >
          <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
              {/* text */}
              <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                  Your brand shines
                </div>
                <h1
                  className="hero-title secondary"
                  style={{ fontFamily: "AgainstRegular" }}
                >
                  TUNIRISE
                </h1>

                {/* <h1 className='h1 mb-4'>Univers Automatisme</h1> */}
                <p className="subtitle max-w-[490px] mx-auto xl:mx-0 text-sm">
                  At Tunirise, we believe every brand has a story worth sharing.
                  As a dedicated communication and web development agency, we
                  empower businesses to thrive in the digital world.
                </p>
                {/* buttons */}
                <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                  <Link href="/contact">
                    <Button className="gap-x-2 text-white">Contact Us</Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="secondary" className="gap-x-2">
                      About Us
                    </Button>
                  </Link>
                </div>
                {/* socials */}
                <Socials
                  containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                  iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
                />
              </div>
         
              <div className="hidden  xl:flex relative">
            

                <Badge
                  containerStyles="absolute top-[24%] -left-[5rem]"
                  icon={<RiLightbulbFlashFill />} 
                  badgeText="Creativity"
                  endCountText={null}
                  endCountNum={null}
                />

 
                <Badge
                  containerStyles="absolute top-[55%] -right-8"
                  icon={<RiRocketFill />}
                  badgeText="Innovation"
                />

              
                <Badge
                  containerStyles="absolute top-[80%] -left-[1rem]"
                  icon={<RiHeartFill />} 
                  badgeText="Commitment"
                />

                <div className=" bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                <div className="text-primary w-[510px] h-[462px] bg-no-repeat relative bg-bottom">
                  <svg
                    version="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 509 462"
                    width="509"
                    height="462"
                  >
                    <path
                      fill="currentColor"
                      d="m430.7 91.8c54.9 57.2 92.6 140.1 73.1 203-19.9 63-97.1 105.7-172.3 134.6-74.8 28.9-147.5 44-203.1 19.2-56-24.8-95.4-89.8-115.3-163.4-19.6-73.3-20.3-155.2 19.2-208.8 39.8-53.7 119.4-79.2 195.2-76.1 76.2 2.8 148.3 34.4 203.2 91.5z"
                    />
                  </svg>

                  <DevImg imgSrc="/hero/developer.png" />
                </div>
              </div>
            </div>

            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
              <RiArrowDownSLine className="text-3xl text-primary" />
            </div>
          </div>
        </section>
      )}
{isAboutPage && (
  <section className="head py-12 mt-16 xl:py-24 lg:h-[84vh] relative flex min-h-full w-full flex-col sm:place-content-center px-4 dark:bg-none">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <a
        href="#"
        className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-primary rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
        role="alert"
      >
        <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
          Join Us
        </span>{" "}
        <span className="text-sm font-medium text-white">
          Explore our vision and journey
        </span>
        <svg
          className="ml-2 w-5 h-5"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <h1
        style={{
          fontFamily: "AgainstRegular",
          lineHeight: "50px",
        }}
        className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white"
      >
       REMEMBER US, TEHY REMEMBER YOU
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
      At Tunirise, we believe in the power of connection. We strive to create innovative media and web solutions that foster relationships and inspire lasting impact. Together, we build a future where every story matters.
      </p>
    </div>
    <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
      <RiArrowDownSLine className="text-3xl text-primary" />
    </div>
  </section>
)}



    </div>
  );
};

export default Header;
