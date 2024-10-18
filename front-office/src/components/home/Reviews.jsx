"use client";

const testimonials = [
  {
    img: "/reviews/avatar-1.png",
    name: "Richard Thompson",
    role: "Chef",
    quote:
      "The attention to detail in the design and functionality is impressive. It's truly a game-changer for my workflow.",
  },
  {
    img: "/reviews/avatar-2.png",
    name: "Evelyn Anderson",
    role: "Interior Designer",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.",
  },
  {
    img: "/reviews/avatar-3.png",
    name: "John Doe",
    role: "Game Dev",
    quote:
      "This platform has transformed the way I work. It's efficient, intuitive, and saves me a ton of time every day.",
  },
  {
    img: "/reviews/avatar-4.png",
    name: "Emily Smith",
    role: "Therapist",
    quote:
      "Absolutely love the user interface. The features are spot-on, and the support team is incredibly responsive.",
  },
  {
    img: "/reviews/avatar-5.png",
    name: "Oliver Taylor",
    role: "Engineer",
    quote:
      "The attention to detail in the design and functionality is impressive. It's truly a game-changer for my workflow.",
  },
  {
    img: "/reviews/avatar-6.png",
    name: "Mason Wilson",
    job: "Video Editor",

    quote:
      "Using this tool has boosted my productivity significantly. I can't imagine going back to how I used to work.",
  },
];

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";
import Heading from "../Heading";

export default function Reviews() {
  const testimonialsRef = useRef(null);
  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const autorotateTiming = 7000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === testimonials.length ? 0 : (active) => active + 1
      );
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, [active]);

  return (
    <section
      className=" lg:mb-48 mb-24 xl:pt-0  overflow-hidden container"
      data-aos="fade-left"
    >
             <div className="lg:mb-24"><Heading tit1="REVIEWS" tit2="REVIEWS"/></div>

      <div className="mx-auto w-full max-w-6xl text-center">
        {/* Testimonial image */}
        <div className="relative h-32">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-yellow-400/25 before:via-orange-300/5 before:via-25% before:to-orange-600/0 before:to-75%">
            <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
              {testimonials.map((testimonial, index) => (
                <Transition
                  as="div"
                  key={index}
                  show={active === index}
                  className="absolute inset-0 -z-10 h-full"
                  enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                  enterFrom="opacity-0 -rotate-[60deg]"
                  enterTo="opacity-100 rotate-0"
                  leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                  leaveFrom="opacity-100 rotate-0"
                  leaveTo="opacity-0 rotate-[60deg]"
                  beforeEnter={() => heightFix()}
                >
                  <Image
                    className="relative left-1/2 top-11 -translate-x-1/2 rounded-full"
                    src={testimonial.img}
                    width={70}
                    height={70}
                    alt={testimonial.name}
                  />
                </Transition>
              ))}
            </div>
          </div>
        </div>
        {/* Text */}
        <div className="mb-9 transition-all delay-300 duration-150 ease-in-out">
          <div
            className="relative flex flex-col overflow-hidden"
            ref={testimonialsRef}
          >
            {testimonials.map((testimonial, index) => (
              <Transition
                key={index}
                show={active === index}
                enter="transition ease-in-out duration-500 delay-200 order-first"
                enterFrom="opacity-0 -translate-x-4"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-out duration-300 delay-300 absolute"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-4"
                beforeEnter={() => heightFix()}
              >
                <div className="text-4xl font-caveat px-6  text-slate-900 before:content-['\201C'] after:content-['\201D'] ">
                  {" " + testimonial.quote}
                </div>
              </Transition>
            ))}
          </div>
        </div>
        {/* Buttons */}
        <div className="-m-1.5 flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              className={`m-1.5 inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-xs shadow-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 ${
                active === index
                  ? "bg-primary text-white shadow-indigo-950/10"
                  : "bg-white text-slate-900 hover:bg-orange-100"
              }`}
              onClick={() => {
                setActive(index);
                setAutorotate(false);
              }}
            >
              <span>{testimonial.name}</span>{" "}
              <span
                className={`${
                  active === index ? "text-indigo-200" : "text-slate-300"
                }`}
              >
                -
              </span>{" "}
              <span>{testimonial.role}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
