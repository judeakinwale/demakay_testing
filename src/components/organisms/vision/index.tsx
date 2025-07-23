"use client";

import React from "react";
import { motion } from "framer-motion";

const Vision = () => {
  const values = [
    {
      title: "Professionalism",
      description:
        "Our high standards, service and specialized staff spell the difference between our outstanding performance, and other firms. We make sure that the expertise of our whole firm serves every client.",
      icon: "/icons/icon-1.svg",
    },
    {
      title: "Responsiveness",
      description:
        "Our firm is responsive. Companies who choose our firm rely on competent advice and fast, accurate personnel. We provide financial services to individuals, large and small businesses, and other agencies.",
      icon: "/icons/icon-2.svg",
    },
    {
      title: "Quality in Growth",
      description:
        "Our primary goal as a trusted advisor is to be available and to provide insightful advice to enable our clients to make informed financial decisions. We do not accept anything less from ourselves and this is what we deliver to you.",
      icon: "/icons/icon-3.svg",
    },
  ];

  return (
    <motion.div
      id="vision"
      className="w-full bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Header */}
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="w-full py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
      >
        <span className="text-sm font-medium bg-gray-100 text-gray-700 px-4 py-1 rounded-md mb-4">
          Our Vision
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-black leading-tight max-w-3xl">
          Expert Tax & Accounting Services
        </h1>
      </motion.section>

      {/* Values Grid */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="border border-gray-200 rounded-xl p-6 text-left hover:bg-[#d1d1ff] hover:shadow-lg transition-all duration-300 group"
            >
              {/* <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 mb-4 transition-transform duration-300 group-hover:scale-110"
              /> */}
              <h3 className="text-3xl mb-6 text-black">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <motion.button
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 bg-[#d1d1ff] text-gray-900 px-6 py-2 rounded-md font-medium flex items-center gap-2 hover:bg-[#332f9a] hover:text-white transition-colors duration-200"
        >
          Who we are
          <span className="text-xl">→</span>
        </motion.button> */}
      </section>
    </motion.div>
  );
};

export default Vision;
