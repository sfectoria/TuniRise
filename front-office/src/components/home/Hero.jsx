"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// components
import DevImg from "../DevImg";
import Badge from "../Badge";
import Socials from "../Socials";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NewProject from "../../images/NewProject.png";
import Image from "next/image";

const Hero = () => {
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
  <></>
  );
};

export default Hero;
