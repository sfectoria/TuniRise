import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../images/logounivers.png";
import Socials from "@/components/Socials";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container py-8 mx-auto flex flex-col sm:flex-row items-end justify-between">
        {/* Logo and Text */}
        <a className="flex title-font font-medium items-end md:justify-start justify-center text-gray-900">
          <Image width={50} height={50} src={logo} alt="Tunirise Logo" className="mb-1"/>
          <Link href="/">
            <div className="">
              <span className="cursor-pointer text-primary ml-3 HammersmithOne text-3xl">
                T
              </span>
              <span className="cursor-pointer text-primary MonumentExtended text-2xl">
                un
              </span>
              <span className="cursor-pointer text-primary  HammersmithOne text-3xl">
                iRise
              </span>
            </div>
          </Link>
        </a>

        {/* Text at the bottom */}
        <p className="text-sm text-gray-500 sm:mb-1 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:mt-0 mt-4">
          © 2024 Tunirise.
        </p>

        {/* Socials aligned at the bottom */}
        <span className="inline-flex sm:ml-auto mb-[7px] sm:mt-0 mt-4 justify-center sm:justify-start">
          <Socials containerStyles="flex gap-x-2 mx-auto xl:mx-0 " />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
