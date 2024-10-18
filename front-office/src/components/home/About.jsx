'use client';
import React, { useEffect } from "react";
import DevImg from "../DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";


const Milestones = [
  {
    title: "SOCIAL MEDIA SUCCESS",
    date: "Fev, 2024",
    description: "Grew Sfectoria's social media presence from 500 to over 10,000 followers.",
    details: "Utilizing organic marketing strategies, we engaged communities through content creation, including posts, reels, and workshops."
  },
  {
    title: "EXPANSION INTO TRAINING",
    date: "JAN, 2024",
    description: "Expanded services to include web development and media production training.",
    details: "We provided mentorship and guided more than 50 students and interns through end-of-study projects (PFE), equipping them with the skills to succeed in the industry."
  },
  
  {
    title: "TRAINING INITIATIVES",
    date: "Nov, 2023",
    description: "Launched training programs for web development and media production.",
    details: "We empowered over 50 students and interns, equipping them with the skills needed to thrive in the digital landscape."
  },
  {
    title: "PARTNERSHIP WITH JALYSS",
    date: "MAR, 2023",
    description: "Partnered with Jalyss to enhance their digital footprint.",
    details: "Provided web development services and produced engaging multimedia content, including podcasts and reels, to strengthen their brand identity and set up management systems for campaigns."
  }
];



import AOS from "aos";
import 'aos/dist/aos.css';
import Heading from "../Heading";

export default function About() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,

    });
    AOS.refresh();
  }, []);
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:max-h-[860px] lg:mb-48 mb-24 pt-24" data-aos="fade-left">
    <div className="">
      <div className="lg:mb-12 container">
        <Heading tit1="ABOUT US" tit2="ABOUT US" />
      </div>

      <div className="flex flex-col xl:flex-row">
        <div className="flex-1">
          <div className="text-lg mt-12 xl:mt-8">
            <div className="relative font-inter antialiased">
              <main className="flex flex-col justify-center overflow-hidden" style={{ background: "#F8F9F9" }}>
                <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-5">
                  <div className="w-full max-w-3xl mx-auto">
                    <div className="-my-6">
                      {Milestones.map((milestone, index) => (
                        <div key={index} className="relative pl-8 sm:pl-32 py-6 group chilanka-regular">
                          <div className=" font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                            {milestone.title}
                          </div>
                          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-orange-600 bg-orange-100 rounded-full">
                              {milestone.date}
                            </time>
                            <div className="text-xl font-bold text-slate-900">
                              {milestone.description}
                            </div>
                          </div>

                          <div className="text-slate-500">
                            {milestone.details}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
