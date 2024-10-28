import { Navbar } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import React from "react";

const Home = () => {
  return (
    <div className="overflow-x-clip">
      <Navbar />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
    </div>
  );
};

export default Home;
