"use client";
import Image from "next/image";
import productImage from "@/public/assets/product-image.png";
import pyramidImage from "@/public/assets/pyramid.png";
import tubeImage from "@/public/assets/tube.png";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ProductShowcase = () => {
  const productShowCaseRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productShowCaseRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={productShowCaseRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <span className="tag">Boost Your productivity</span>
          </div>
          <h2 className="h2 md:tracking-normal">
            A more effective way to track progress
          </h2>
          <p className="p-text">
            Effortlessly turn your ideas into fully functional,responsive, Saas
            website template written fully typed with Next.js 15 and typescript.
          </p>
        </div>
        <div className="relative  ">
          <Image
            src={productImage}
            alt="Saas template image"
            width={400}
            height={400}
            className="mt-10 md:w-full md:h-auto"
          />
          <motion.img
            src={pyramidImage.src}
            alt="pyramid"
            width={262}
            height={262}
            style={{ translateY }}
            className="absolute hidden md:block -right-28 -top-36 w-64 h-auto  "
          />
          <motion.img
            src={tubeImage.src}
            alt="pyramid"
            width={262}
            height={262}
            style={{ translateY }}
            className="absolute hidden md:block -left-28 bottom-16 w-64 h-auto  "
          />
        </div>
      </div>
    </section>
  );
};
