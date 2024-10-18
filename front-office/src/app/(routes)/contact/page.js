"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import Lottie from "react-lottie-player";
import message from "../../../images/lotties/message.json"

import "../../../styles/contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import message from ""

function page() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    // subject: "",
  });
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
 
 setLoading(true);
    const templateParams = {
      to_name: "TUNIRISE service client",
      from_name: formData.fullName,
      name: formData.fullName,
      // subject: formData.subject,
      message: formData.message,
      email: formData.email,
    };
    console.log(formData, "formData");

    emailjs
      .send(
        "service_ctzi3ud",
        "template_0iy3j2j",
        templateParams,
        "rNdAMuZfH8WByuwnD"
      )
      .then((res) => {
        console.log(res, "resss");
      })
      .catch((err) => {
        console.log(err, "errrrrr");
      });

    console.log("message sent");

    setLoading(false);
    setFormSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      // subject: "",
      message: "",
    });
  };

  const form = useRef(null);
  // const sendEmail = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   const templateParams = {
  //     to_name: "TUNIRISE service client",
  //     from_name: formData.fullName,
  //     subject: formData.subject,
  //     message: formData.message,
  //     email: formData.email,
  //   };

  //   try {
  //     const response = await emailjs.send(
  //       "service_ctzi3ud",
  //       "template_0iy3j2j",
  //       templateParams,
  //       "rNdAMuZfH8WByuwnD"
  //     );
  //     console.log(response);
  //     setFormSubmitted(true);
  //     setFormData({
  //       fullName: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //     });
  //   } catch (error) {
  //     console.error("EmailJS Error: ", error);
  //     alert("Failed to send message. Please try again later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
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
    <section className="w-full min-h-screen mb-[10rem] mt-[5rem]">
      <div className="first-section  bg-gradient-to-l from-transparent to-primary  sm:p-16 md:p-24 xl:p-24  flex justify-center lg:justify-end relative ">
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between ">
          <div className="  lg:w-1/2  mb-6 lg:mb-0 text-center md:text-left ">
            <div
              className="text-xl uppercase  mb-4 text-white  hidden lg:block "
              data-aos="fade-right"
            >
              Contactez-nous
            </div>
            <h1
              data-aos="fade-right"
              className=" title  font-bold mb-4 hidden lg:block  
             text-white   md:ml-0 drop-shadow-lg leading-tight tracking-normal"
              style={{ fontSize: "3.5rem" }}
            >
              Discutons <br /> de votre
             <span style={{backgroundColor:"white"}} className="rounded-md text-primary px-4 pt-3 mx-4 pr-8"> besoin</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                style={{ display: "none" }}
                className="svg-filters"
              >
                <defs>
                  <filter id="marker-shape">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0 0.15"
                      numOctaves="1"
                      result="warp"
                    />
                    <feDisplacementMap
                      xChannelSelector="R"
                      yChannelSelector="G"
                      scale="30"
                      in="SourceGraphic"
                      in2="warp"
                    />
                  </filter>
                </defs>
              </svg>
            </h1>
          </div>
        </div>

        {/* formulaire */}
        <div className="md:w-[60%] md:block   lg:w-1/2 lg:mx-6 lg:mt-0 lg:pl-56 lg:top-10 sm:top-14 top-10 flex justify-center lg:justify-end absolute ">
          <div
            className="formulaire w-full  px-8 py-10 mx-auto bg-white shadow-2xl lg:max-w-xl rounded-xl "
            data-aos="fade-up-left"
          >
            {!formSubmitted && (
              <>
                <h1 className="text-1xl  uppercase  mb-4 text-primary ">
                  Envoyez-nous un message
                </h1>
                <form className="mt-6" onSubmit={sendEmail}>
                  <div className="flex-1">
                    <label
                      className="block mb-2 text-sm text-gray-800 font-inter  tracking-wide"
                      style={{ fontSize: "13px" }}
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      name="fullName"
                      placeholder="Nom complet"
                      className="flex h-[54px] w-full rounded-full border border-input bg-background px-8 py-2 text-base ring-offset-background  focus-visible:outline-none focus-visible:primary-2 focus-visible:ring-ring focus-visible:primary disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-muted-foreground border-primary"
                    />
                  </div>
                  <div className="flex-1 mt-6">
                    <label
                      className="block mb-2 text-sm text-gray-800 font-inter  tracking-wide"
                      style={{ fontSize: "13px" }}
                    >
                      Adresse e-mail
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                      placeholder="Adresse e-mail"
                      className="flex h-[54px] w-full rounded-full border border-input bg-background px-8 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none  focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-primary"
                    />
                  </div>
                  {/* <div className="flex-1 mt-6">
                    <label
                      className="block mb-2 text-sm text-gray-800 font-inter  tracking-wide"
                      style={{ fontSize: "13px" }}
                    >
                      Sujet
                    </label>
                    <input
                      required
                      // type="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      name="subject"
                      placeholder="Adresse e-mail"
                      className="flex h-[54px] w-full rounded-full border border-input bg-background px-8 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none  focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-primary"
                    />
                  </div> */}
                  <div className="w-full mt-6">
                    <label
                      className="block mb-2 text-sm text-gray-800 font-inter  tracking-wide"
                      style={{ fontSize: "13px" }}
                    >
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={handleChange}
                      name="message"
                      className="flex min-h-[120px] w-full rounded-[30px] border border-input bg-background px-8 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-primary"
                      placeholder="message"
                    ></textarea>
                  </div>

                  <Button className="gap-x-2 mt-6 text-white" type="submit">
                    {loading ? "Sending..." : "Envoyer"} <Send size={18} />
                  </Button>
                </form>
              </>
            )}
            {formSubmitted && (
              <div className=" p-5 col-lg-5">
                <div className="d-flex flex-column justify-content-center align-items-center ">
                  <Lottie
                    loop
                    animationData={message}
                    play
                    style={{ width: 300, height: 300 }} // Adjust size as needed
                  />
                  <h3 className="text-center mt-12 ">
                    Thank you for getting in touch with us!
                  </h3>
                  {/* <span className="">{t("contact.thanksContent")}</span> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white   ">
        <div className="hidden lg:block  lg:w-1/2 lg:mx-6">
          <div className="mt-6 space-y-8 md:mt-8">
            <div className="icon grid grid-cols-1 gap-12 md:grid-cols-2 mt-8 ml-24 mx-2">
              <div className="flex gap-4" data-aos="fade-right">
                <div className="mt-4  text-primary">
                  <AiOutlineMail size={24} />
                </div>
                <div className="mt-2">
                  <h2
                    className="mt-4  font-caveat tracking-[1px] text-primary"
                    style={{ fontSize: "8px", fontFamily: "AgainstRegular" }}
                  >
                    Comment pouvons-nous vous aider ?
                  </h2>
                  <p
                    className="mt-2 text-sm text-gray-700 font-inter tracking-wide"
                    style={{ fontSize: "8px", fontFamily: "AgainstRegular" }}
                  >
                    Notre équipe est là pour vous aider.
                  </p>
                  <p
                    className="mt-2 text-sm text-gray-700  font-inter tracking-wide"
                    style={{ fontSize: "8px", fontFamily: "AgainstRegular" }}
                  >
                    info@loremipsumdolor
                  </p>
                </div>
              </div>
              <div className="flex gap-3" data-aos="fade-left">
                <div className="mt-4  text-primary">
                  <SlLocationPin size={24} />
                </div>
                <div className="mt-2">
                  <h2
                    className="mt-4  font-caveat tracking-[2px] text-primary"
                    style={{ fontSize: "8px", fontFamily: "AgainstRegular" }}
                  >
                    Notre emplacement
                  </h2>
                  <p
                    className="mt-2 text-sm text-gray-700  font-inter tracking-wide"
                    style={{ fontSize: "8px", fontFamily: "AgainstRegular" }}
                  >
                    Dummy Road 125x
                  </p>
                  <p
                    className="mt-2 text-sm text-gray-700  font-inter tracking-wide"
                    style={{ fontSize: "8px", fontFamily: "AgainstRegular" }}
                  >
                    Street Location,City,Area
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
