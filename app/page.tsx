import { Navbar } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { LogoTicker } from "@/components/sections/LogoTicker";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogoTicker />
    </div>
  );
};

export default Home;
