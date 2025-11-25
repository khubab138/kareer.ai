"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScrolled = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScrolled);

    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6  mx-auto">
          <h1 className="gradient-title text-5xl font-bold  md:text-6xl lg:text-7xl xl:text-8xl">
            Your Ai Career Coach for <br /> Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-2xl">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success
          </p>
        </div>
        <div className="flex justify-center sapce-x-4">
          <Link href={"/dashboard"}>
            <Button size={"lg"} className="px-8">
              Get Started
            </Button>
          </Link>
        </div>

        <div className="hero-image-wrapper mt-5 md:mt-0 overflow-hidden">
          <div ref={imageRef} className="hero-image">
            <Image
              width={1000}
              height={600}
              alt="Banner Kareer"
              src={"/banner.jpeg"}
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
