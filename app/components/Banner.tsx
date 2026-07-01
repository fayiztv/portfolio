"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = [
    "Founder & Software Engineer",
    "Front-end Developer",
    "Back-end Developer",
    "React.Js Developer",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster deletion
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(false);
          setTypingSpeed(100); // Reset typing speed
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 200); // small delay so it's still smooth
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center ">
          {/* Left side - Text content */}
          {/* Right side - Character image */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
            <div className="relative top-10">
              {/* Mobile: Hello text positioned on top of image */}
              <div className="lg:hidden  -top-150 z-10">
                <div className="relative inline-block ">
                  <Image
                    src="/assets/arrow.png"
                    alt="Arrow pointer"
                    width={80}
                    height={80}
                    className="absolute top-5 rotate-z-280"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 mb-3">
                      <span className="h-2 w-2 rounded-full bg-violet-400"></span>
                      <span className="text-sm font-medium text-violet-300">
                        Founder • YourStore SaaS
                      </span>
                    </div>
                    <p className="text-white text-lg whitespace-nowrap">
                      Hello! I Am{" "}
                      <span className="text-purple-400">Muhammed Fayiz</span>
                    </p>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
                </div>
              </div>
              <Image
                src="/assets/me.png"
                alt="Ibrahim Memon - Software Engineer and Designer"
                width={300}
                height={300}
                className=" max-w-md absolute"
                style={{ width: "auto", height: "auto" }}
                priority
              />
              <Image
                src="/assets/me-glow.png"
                alt="Ibrahim Memon - Software Engineer and Designer"
                width={300}
                height={300}
                className="max-w-md "
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>
          </div>
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Desktop: Hello text in original position */}
            <div className="hidden lg:inline-block relative">
              <Image
                src="/assets/arrow.png"
                alt="Arrow pointer"
                width={100}
                height={100}
                className="absolute "
                style={{
                  left: "-100px",
                  width: "auto",
                  height: "auto",
                }}
              />
              <div className="inline-flex items-center gap-2 px-5 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 mb-5">
                <span className="h-2 w-2 rounded-full bg-violet-400"></span>
                <span className="text-sm font-medium text-violet-300">
                  Founder • YourStore SaaS
                </span>
              </div>
              <div style={{ bottom: 10, position: "relative" }}>
                <p className="text-white text-lg">
                  Hello! I Am{" "}
                  <span className="text-purple-400">Muhammed Fayiz</span>
                </p>
              </div>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
            </div>
            <div className="">
              <p className="text-2xl"> A Developer who </p>
              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-white leading-tight">
                Judges a project
                <br /> by its{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                    bugs
                  </span>
                </span>
                ...
              </h1>
              <p className="text-md text-white/80">
                Because fixing them tells you how it was built.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3 pt-15 text-center lg:text-left">
          <p className="text-5xl text-white font-bold">
            I&apos;m a {displayedText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-lg lg:text-xl text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span>
              Founder of an E-commerce SaaS Platform • Open to Full-Time
              Opportunities
            </span>
          </p>
          <p className="text-lg text-white/80 max-w-2xl mt-15 mx-auto lg:mx-0">
            Software Engineer and SaaS founder with 2 years of experience
            building scalable, production-ready web applications using modern
            technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
