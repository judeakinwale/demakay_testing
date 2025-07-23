import React from "react";
import {
  Navbar,
  Hero,
  Services,
  Vision,
  // PartnerSlider,
  ServicesBentoGrid,
  Reviews,
} from "@/components/organisms";

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <Vision />
      <Services />
      {/* <PartnerSlider /> */}
      <ServicesBentoGrid />
      <Reviews />
    </div>
  );
}
