"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import aboutImg from "@/public/aboutImg.jpg";

export default function About() {
  return (
    <div className="relative">
      <SectionHeading>About</SectionHeading>
      <section
        className="mb-6 max-w-[45rem] lg:flex items-center text-center leading-7 sm:mb-12 scroll-mt-28 relative"
        id="about"
      >
        <div className="m-5 ml-2">
          <p className="mb-5 text-lg lg:text-left">
            Currently employed at{" "}
            <span className="underline font-bold text-[#6cbcf6]">
              <a href="https://rpanp.com/">RPA Nepal</a>
            </span>{" "}
            as a <span className="font-bold">FullStack Software Engineer</span>,
            Collaborating with cross-functional teams, including designers, and
            product managers, to ensure seamless integration of new features
            into the existing system.
          </p>

          <p className="mb-6 text-lg lg:text-left">
            I am a developer who love to code for the open source community also
            so you can find my contributions in{" "}
            <span className="underline font-bold text-[#9eb8d6]">
              <a href="https://www.github.com/bikky-kc013/">Github</a>
            </span>
            .
          </p>
        </div>
        <div className="flex justify-center items-center relative">
          <Image
            src={aboutImg}
            alt="Bharat Khatri Chhetri (Bikky Kc)"
            quality={100}
            priority
            className="w-[200px] mb-20 lg:mb-0 lg:w-[500px] rounded-xl"
          />
        </div>
      </section>
    </div>
  );
}
