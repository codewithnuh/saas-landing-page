"use client";
import achemeLogo from "@/public/assets/logo-acme.png";
import apexLogo from "@/public/assets/logo-apex.png";
import celestialLogo from "@/public/assets/logo-celestial.png";
import echoLogo from "@/public/assets/logo-echo.png";
import pulseLogo from "@/public/assets/logo-pulse.png";
import quantumLogo from "@/public/assets/logo-quantum.png";
import { motion } from "framer-motion";

import Image from "next/image";
export const LogoTicker = () => {
  const logos = [
    achemeLogo,
    apexLogo,
    celestialLogo,
    pulseLogo,
    quantumLogo,
    echoLogo,
  ];
  return (
    <div className="py-8 md:py-12 bg-white ">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {logos.map((item, i) => (
              <Image
                src={item}
                key={i}
                className="h-8 w-auto"
                alt="logo"
                width={400}
                height={399}
              />
            ))}
            {logos.map((item, i) => (
              <Image
                src={item}
                key={i}
                className="h-8 w-auto"
                alt="logo"
                width={400}
                height={399}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
