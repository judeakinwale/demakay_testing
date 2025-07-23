"use client";

import React from "react";
import { motion } from "framer-motion";
import service1 from "@/assets/images/services-1.png";
import service2 from "@/assets/images/services-2.png";
import service3 from "@/assets/images/services-3.png";
import service4 from "@/assets/images/services-4.png";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      image: service1,
      title: "Personal Tax (T1)",
      buttonText: "Who we are",
    },
    {
      image: service2,
      title: "Business Tax (T2)",
      buttonText: "Learn More",
    },
    {
      image: service3,
      title: "CRA Representation",
      buttonText: "Learn more",
    },
    {
      image: service4,
      title: "Bookkeeping",
      buttonText: "Learn more",
    },
  ];

  return (
    <motion.section
      id="services"
      className="bg-[#d1d1ff] w-full py-16 px-4 sm:px-6 md:px-16 overflow-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Top Text */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start"
      >
        <div>
          <span className="text-sm font-medium bg-white text-gray-800 px-4 py-1 rounded-md inline-block mb-6 shadow-sm">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-black leading-snug">
            Efficient Tax & Accounting Solutions
          </h2>
        </div>

        <div className="text-gray-700 text-base md:text-lg">
          <p>
            We tailor workflows to meet each client’s needs, leveraging top
            accounting technology for seamless and efficient bookkeeping. We
            serve clients in various industries, including hospitality,
            nightlife, real estate, legal, and medical.
          </p>
        </div>
      </motion.div>

      {/* Services Cards */}
      <div className="mt-16 h-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl flex items-end justify-center px-4 pb-4 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-clip"
          >
            <Image
              src={service.image}
              alt={"Service_Image " + index}
              className="absolute inset-0 object-cover rounded-2xl"
              fill
            />
            <div className="rounded-2xl bg-[#f1f1fd] w-full flex flex-col items-start justify-center gap-4 p-4 z-10">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <button className="bg-white text-gray-900 w-full px-6 py-2 rounded-md font-medium flex justify-between items-center gap-2 hover:bg-[#332f9a] hover:text-white transition-colors duration-200">
                <span>{service.buttonText}</span>
                <span className="text-xl">→</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
