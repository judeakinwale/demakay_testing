"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      id="home"
      className={
        "relative h-screen w-full px-4 sm:px-6 lg:px-16 flex items-end " +
        "background-hero"
      }
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#131243]/80 to-transparent z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center w-full h-1/2 pb-12 gap-10">
        {/* Left Text Section */}
        <motion.section
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 w-full lg:w-2/3"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
            Expert Tax & Accounting Services
          </h1>

          <button className="bg-[#d1d1ff] text-[#332f9a] w-full sm:w-72 px-6 py-3 rounded-md font-medium flex justify-between items-center gap-2 hover:bg-[#332f9a] hover:text-white transition-colors duration-200">
            <span>Schedule a Consultation</span>
            <span className="text-xl">→</span>
          </button>
        </motion.section>

        {/* Right Side */}
        <motion.section
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block w-1/3 h-full"
        >
          <div className="flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden max-w-4xl w-full">
            {/* Left Section: Average ROI */}
            <div className="w-1/2 bg-gradient-to-br from-[#7e7af094] to-[#272577a2] backdrop-blur-xs text-white p-4 md:p-6 flex flex-col justify-between">
              <div className="flex flex-col items-start justify-center">
                <span className="text-3xl md:text-5xl font-light leading-none">
                  250%
                </span>
                <span className="text-xl md:text-2xl opacity-80">annually</span>
              </div>
              <div className="mt-8">
                <span className="text-lg md:text-3xl font-medium">
                  Average ROI
                </span>
              </div>
            </div>

            {/* Right Section: Increase Revenue */}
            <div className="w-1/2 bg-[#d1d1ff] text-[var(--color-primary-deep)] p-4 md:p-6 flex flex-col justify-between rounded-xl">
              <div className="flex flex-col items-start justify-center">
                <span className="text-3xl md:text-5xl font-light leading-none">
                  28%
                </span>
                <span className="text-xl md:text-2xl opacity-80">annually</span>
              </div>
              <div className="mt-8">
                <span className="text-lg md:text-3xl font-medium">
                  Increase revenue
                </span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}
