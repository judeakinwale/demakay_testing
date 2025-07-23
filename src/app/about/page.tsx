"use client";

import { PageLayout } from "@/template";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  const router = useRouter();

  return (
    <PageLayout
      pageName="About"
      title="About Us"
      subText="With years of experience and a results-focused approach, we empower businesses to navigate complexity and achieve their goals."
    >
      <div className={`main__container`}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          {/* Story Section */}
          <motion.section
            className="py-16 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={itemVariants}>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We offer a comprehensive suite of services designed to meet
                    the financial needs of individuals and businesses. In
                    Accounting Services, we provide expert support in
                    multi-entity accounting, financial reporting, and
                    bookkeeping—ensuring accuracy and clarity across all
                    financial operations. Our Tax Services cover both personal
                    and business tax filing, CRA representation, GST/HST
                    filings, and full tax compliance, helping clients navigate
                    complex regulations with confidence. Additionally, we
                    specialize in Process Optimization, delivering workflow
                    automation, system implementation, and efficiency
                    improvements to streamline operations and drive growth.
                  </p>
                  <motion.button
                    className="bg-[#d1d1ff] text-[#332f9a] w-full sm:w-72 px-6 py-3 rounded-md font-medium flex justify-between items-center gap-2 hover:bg-[#332f9a] hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started Today
                  </motion.button>
                </motion.div>

                <motion.div className="relative" variants={itemVariants}>
                  <div className="bg-gradient-to-r from-[#7e7af094] to-[#332f9a] rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Certified professionals with proven expertise
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Personalized service tailored to your needs
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Adhere to CRA regulations with ease
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Secure, confidential handling of your finances
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Services Overview */}
          <motion.section
            className="py-16 px-4 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="max-w-6xl mx-auto">
              <motion.div className="text-center mb-12" variants={itemVariants}>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Our Services
                </h2>
                <p className="text-xl text-gray-600">
                  Comprehensive financial solutions for individuals and
                  businesses
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Tax Preparation",
                    description:
                      "Expert preparation of individual and business tax returns with maximum deduction strategies.",
                    icon: "📋",
                  },
                  {
                    title: "Bookkeeping",
                    description:
                      "Professional bookkeeping services to keep your financial records organized and compliant.",
                    icon: "📊",
                  },
                  {
                    title: "Financial Planning",
                    description:
                      "Strategic planning to help you achieve your long-term financial goals and objectives.",
                    icon: "💼",
                  },
                  {
                    title: "Payroll Services",
                    description:
                      "Complete payroll management including tax withholdings and compliance reporting.",
                    icon: "💰",
                  },
                  {
                    title: "Tax Resolution",
                    description:
                      "Help resolving tax issues with the IRS and state tax agencies for individuals and businesses.",
                    icon: "🛡️",
                  },
                  {
                    title: "Business Consulting",
                    description:
                      "Strategic advice for business growth, structure optimization, and financial efficiency.",
                    icon: "🚀",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            className="py-16 px-4 bg-gradient-to-r from-[#7e7af094] to-[#332f9a]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="text-4xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                Ready to Simplify Your Finances?
              </motion.h2>
              <motion.p
                className="text-xl text-blue-100 mb-8"
                variants={itemVariants}
              >
                Schedule a consultation today and discover how we can help you
                achieve your financial goals.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={itemVariants}
              >
                <motion.button
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/contact")}
                >
                  Schedule Consultation
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/contact")}
                >
                  Contact Us
                </motion.button>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </PageLayout>
  );
}
