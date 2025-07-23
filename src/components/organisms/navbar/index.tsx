"use client";

import React, { useState } from "react";

import Image from "next/image";

import logo from "@/assets/images/logo.webp";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const links = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Our Vision", id: "vision" },
    { name: "Services", id: "services" },
    { name: "Testimonials", url: "/testimonials" },
  ];

  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="text-xl font-bold text-[#332f9a]">
          <Image
            src={logo}
            alt="Demakay"
            className="w-auto h-12 cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>

        <div className="hidden md:flex font-medium items-center">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() =>
                link.id ? scrollTo(link.id) : router.push(link.url!)
              }
              className="text-[#131243] hover:text-white hover:bg-[#131243] p-6 cursor-pointer transition-colors duration-200"
            >
              {link.name}
            </button>
          ))}
          <button
            className="bg-[#d1d1ff] text-[#332f9a] w-full sm:w-72 px-4 py-2 h-full rounded-xl font-medium flex justify-between items-center gap-2 hover:bg-[#332f9a] hover:text-white transition-colors duration-200 cursor-pointer"
            onClick={() => router.push("/contact")}
          >
            <span>Free Consultation</span>
            <span className="text-xl">→</span>
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-[#131243] focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() =>
                link.id ? scrollTo(link.id) : router.push(link.url!)
              }
              className="block w-full text-left py-2 text-[#131243] hover:text-[#332f9a] transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
