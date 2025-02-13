"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed top-0 left-1/2 w-full h-[3.25rem] flex items-center rounded-lg border border-black/10 bg-black bg-opacity-30 backdrop-blur-lg shadow-lg shadow-black/5"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <nav className="fixed top-[0.15rem] left-1/2 flex -translate-x-1/2 py-2 h-12 sm:py-0 sm:h-auto">
        <ul className="flex flex-wrap items-center justify-center w-[22rem] gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-auto sm:flex-nowrap sm:gap-16">
          {links.map((link) => (
            <motion.li
              className="flex items-center justify-center relative h-3/4"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <Link
                className="flex items-center justify-center w-full px-3 py-3 text-gray-200   transition hover:text-blue-800"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
