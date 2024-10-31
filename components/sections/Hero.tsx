"use client";
import { ArrowRight } from "../icons";
import Button from "../ui/Button";
import cogImage from "@/public/assets/cog.png";
import cylinderImage from "@/public/assets/cylinder.png";
import noodleImage from "@/public/assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    // gradient in the hero section is due to the class
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        {/* Flex Container Starts Here*/}
        <div className="md:flex items-center ">
          {/* Content */}
          <div className="md:w-[470px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="h1">Pathway to the productivity</h1>
            <p className="p-text text-left">
              Celebrate the joy of accomplishment with an app designed to
              transform your progress, motivate your efforts, and celebrate your
              success
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Button type="button" className={"btn-primary"}>
                Get for free
              </Button>
              <Button type="button" className={"btn-text gap-1 "}>
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          {/* Image */}
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 md:relative">
            <motion.img
              src={cogImage.src}
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
              }}
              alt="cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <motion.img
              src={cylinderImage.src}
              style={{
                translateY: translateY,
              }}
              width={220}
              height={220}
              alt="cylinder image"
              className="hidden md:block -top-8 -left-32 absolute"
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              height={220}
              className="absolute hidden left-[448px] rotate-[40deg] lg:block top-[543px]"
              alt="noodle image"
              style={{
                translateY: translateY,
                rotate: 30,
              }}
            />
          </div>
          {/* Flex Container Ends Here */}
        </div>
      </div>
    </section>
  );
};
