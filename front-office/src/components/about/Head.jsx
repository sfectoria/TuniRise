"use client";
import React, { useEffect } from "react";
import { ModalVideo, useToggle } from "@baskvava/react-video-modal";
import { motion } from "framer-motion";
import picture from "../../images/picture.png";
import light from "../../images/light.jpg";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
function Head() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const hero_content = {
    title: ["TUNIRISE"],
    description:
      "Univers Automatisme est votre partenaire d'excellence pour l'intégration des nouvelles technologies.",
    button: "Get Started",
    play_button: "Voir Démo",
  };
  const { isOpen, toggle, close } = useToggle();

  return (
    <>
    
    </>
  );
}

export default Head;
