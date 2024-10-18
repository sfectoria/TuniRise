"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";


export function ImagesSliderDemo({ images }) {
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
     
      
    </ImagesSlider>
  );
}
