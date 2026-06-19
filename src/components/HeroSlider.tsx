"use client";
import { motion } from "motion/react";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";
import { ImagesSlider } from "./images-slider";
import { ContainerTextFlip } from "./container-textFlip";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sujonbiswas01",
    icon: <FaInstagramSquare />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/sujonbiswas001/",
    icon: <FaFacebook />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@nextgenprogrammer01",
    icon: <FaYoutube />,
  },
  {
    label: "GitHub",
    href: "https://github.com/sujonbiswas01",
    icon: <FaGithub />,
  },
];

const PROFILE_IMAGE_URL =
  "https://res.cloudinary.com/dcbgdaiod/image/upload/v1777515695/copy_of_ownerprofile_mf6mfl_08a0a6.png";
const CV_LINK =
  "https://drive.google.com/file/d/1wCNofVNfM7zXPdenB-zH6ruUATlBYPxJ/view?usp=sharing";

const developerRoles = [
  "Frontend Developer",
  "Web Developer",
  "Backend Developer",
  "Full Stack Developer",
];

const codingLogoSvg = (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-2xl"
  >
    <circle cx="28" cy="28" r="28" fill="#1E293B" />
    <rect x="18" y="18" width="20" height="20" rx="4" fill="#FD6F00" />
    <path
      d="M29.68 32L33 28L29.68 24"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <animate
        attributeName="d"
        values="
          M29.68 32L33 28L29.68 24;
          M27.68 30L31 28L27.68 26;
          M29.68 32L33 28L29.68 24
        "
        dur="2s"
        repeatCount="indefinite"
      />
    </path>
    <path
      d="M26.32 32L23 28L26.32 24"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <animate
        attributeName="d"
        values="
          M26.32 32L23 28L26.32 24;
          M24.32 30L21 28L24.32 26;
          M26.32 32L23 28L26.32 24
        "
        dur="2s"
        repeatCount="indefinite"
      />
    </path>
    <rect x="27" y="22" width="2" height="12" rx="1" fill="#fff">
      <animate
        attributeName="height"
        values="12;16;12"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        values="22;20;22"
        dur="2s"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
);

function SocialIcons() {
  return (
    <div className="flex gap-4 sm:gap-5 mt-4">
      {SOCIAL_LINKS.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          className="text-2xl sm:text-3xl text-white border-none outline-none cursor-pointer"
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

function DeveloperProfileImage() {
  return (
    <div className="relative z-10 flex flex-col items-center group hover:-rotate-12 transition-all duration-150 cursor-pointer">
      <img
        src={PROFILE_IMAGE_URL}
        className="z-0 px-4 sm:px-6 md:px-0 rounded-3xl max-w-full h-auto"
        alt="Profile"
      />
      <div className="absolute left-0 bottom-0 h-1/5 right-0 z-10 bg-gradient-to-t from-black to-transparent rounded-3xl md:block"></div>
      <div className="absolute -top-8 right-6 md:right-0 md:-top-8 z-20 flex items-center justify-center animate-bounce">
        {codingLogoSvg}
      </div>
    </div>
  );
}

export function ImagesSliderDemo() {
  const sliderImages = [
    "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/09/09/21/12/monitor-933392_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/19/15/32/code-1839877_1280.jpg",
  ];

  return (
    <ImagesSlider
      className="min-h-[calc(100vh-4rem)] md:min-h-[40rem]"
      images={sliderImages}
      overlayClassName="bg-gradient-to-r from-black/80 via-black/65 to-black/80"
    >
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-50 app-shell w-full"
      >
        <motion.div className="relative px-2 md:px-4">
          <div className="flex flex-col gap-10 md:gap-6 md:flex-row justify-between items-center">
            <div className="text-left  w-full relative z-20 space-y-3">
              <h1 className="font-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)]">
                <span className="text-base sm:text-lg md:text-2xl text-slate-100">
                  Hello,
                </span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl text-primary">
                  I’m Sujon a
                </span>
                <br />
                <span className="mt-2 max-w-full !text-2xl sm:!text-3xl md:!text-5xl lg:!text-6xl inline-block">
                  <ContainerTextFlip
                    className="!text-2xl sm:!text-3xl md:!text-5xl lg:!text-6xl"
                    words={developerRoles}
                  />
                </span>
              </h1>
              <SocialIcons />
              <div className="mt-4 text-base md:text-lg lg:text-xl text-slate-100 font-medium leading-relaxed max-w-xl drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)]">
                Crafting <span className="text-primary font-semibold">professional</span>, innovative, and <span className="text-primary font-semibold">responsive</span> web experiences - blending clean code, performance, and user-centered design for businesses that want to make an impact.
              </div>
              <div className="pt-3 pb-4 flex sm:flex-row flex-col items-stretch sm:items-center gap-3 sm:gap-4">
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
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="border border-primary text-white text-center font-semibold font-primary text-base lg:text-lg py-2 px-6 rounded-xl"
                  download
                  href={CV_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </motion.a>
              </div>
            </div>
            {/* Right Section: Profile Image and Logo */}
            <div className="text-right md:max-w-[40%] w-full mr-0">
              <DeveloperProfileImage />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </ImagesSlider>
  );
}
