import { CallToAction } from "@/components/sections/CallToAction";
import { Hero } from "@/components/sections/Hero";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { Pricing } from "@/components/sections/Pricing";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import React from "react";

const Home = () => {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
