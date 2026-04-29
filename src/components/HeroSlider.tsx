"use client";
import { motion } from "motion/react";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { ImagesSlider } from "./images-slider";
import { ContainerTextFlip } from "./container-textFlip";

export function ImagesSliderDemo() {
  const words = [
    " Frontend Developer",
    "Web Developer",
    "backend developer",
    "Full Stack Developer",
  ];
  const images = [
    "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/09/09/21/12/monitor-933392_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/19/15/32/code-1839877_1280.jpg",
  ];
  return (
    <ImagesSlider className="h-[40rem] -mt-4" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50"
      >
        <motion.div className="relative ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-left md:max-w-[60%] w-full relative px-6 md:px-0 space-y-2">
              <h1 className="font-primary font-bold text-[24px] md:text-[35px] lg:text-[40px] leading-tight">
                {" "}
                <span className="text-[18px] md:text-[25px]"> Hello,</span>{" "}
                <br />{" "}
                <span className="text-[24px] md:text-[35px] text-[#9EFF00]">
                  I’m Sujon a
                </span>{" "}
                <br /> <ContainerTextFlip className="mt-2" words={words} />
              </h1>
              <div className="flex gap-6 mt-6">
                <a
                  href="https://www.instagram.com/sujonbiswaseng"
                  className="text-3xl text-white border-none outline-none cursor-pointer "
                >
                  <FaInstagramSquare />
                </a>
                <a
                  href="https://www.linkedin.com/in/sujonbiswaseng"
                  className="text-3xl text-white border-none outline-none cursor-pointer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/sujonbiswas2025/"
                  className="text-3xl text-white border-none outline-none cursor-pointer"
                >
                  <FaFacebook />
                </a>
                <a
                  className="text-3xl text-white border-none outline-none cursor-pointer"
                  href="https://www.youtube.com/@nextgenprogrammer01"
                >
                  {" "}
                  <FaYoutube />{" "}
                </a>
                <a
                  className="text-3xl text-white border-none outline-none cursor-pointer"
                  href="https://github.com/sujonbiswaseng"
                >
                  <FaGithub />
                </a>
              </div>

              <div className="mt-4 text-base md:text-lg lg:text-xl text-gray-300 font-medium leading-relaxed max-w-xl">
                Crafting <span className="text-[#9EFF00] font-semibold">professional</span>, innovative, and <span className="text-[#9EFF00] font-semibold">responsive</span> web experiences — blending clean code, performance, and user-centered design for businesses that want to make an impact.
              </div>
         

              <div className="pt-4 pb-4 flex sm:flex-row flex-col items-center gap-5">
                <motion.a
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0px 4px 24px 0px #FD6F0055",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-[#FD6F00] text-white font-bold font-primary text-[18px] lg:text-[20px] py-1 px-6 rounded-xl shadow-md"
                  href="https://shorturl.at/Vv1bI"
                >
                  Hire Me
                </motion.a>
                <motion.a
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0px 4px 24px 0px #FD6F0055",
                  }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.25,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="border border-[#FD6F00] text-white font-bold font-primary text-[18px] lg:text-[20px] py-1 px-6 rounded-xl"
                  download
                  href="/images/resume.pdf"
                >
                  Download Resume
                </motion.a>
              </div>
            </div>

            <div className="text-right md:max-w-[40%] w-full mr-0">
              <div className="z-10 relative hover:-rotate-12 transition-all duration-150 cursor-pointer">
                <img
                  src="https://res.cloudinary.com/drmeagmkl/image/upload/v1766941482/chatgpt_m8tmep.png"
                  className="z-0 px-6 rounded-3xl md:px-0"
                  alt=""
                />
                <div className="absolute left-0 bottom-0 h-1/5 cursor-pointer right-0 z-10  bg-gradient-to-t from-black to-transparent rounded-3xl md:block"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </ImagesSlider>
  );
}
