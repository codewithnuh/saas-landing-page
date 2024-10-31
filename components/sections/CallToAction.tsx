"use client";
import Button from "../ui/Button";
import starImg from "@/public/assets/star.png";
import springImg from "@/public/assets/spring.png";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const CallToAction = () => {
  const ctaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={ctaRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="h2">Sign up for free today</h2>
          <p className="p-text mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts
          </p>
          <motion.img
            src={starImg.src}
            width={250}
            height={250}
            style={{ translateY }}
            alt="3D Star"
            className="w-72 h-auto absolute -left-80 -top-32 hidden md:block"
          />
          <motion.img
            src={springImg.src}
            width={250}
            height={250}
            alt="3D Spring"
            style={{ translateY }}
            className="w-72 h-auto absolute -right-80 -top-5 hidden md:block"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center items-center">
          <Button type="button" className="btn-primary">
            Get For free{" "}
          </Button>
          <Button type="button" className="btn-text">
            <span> Learn More </span>
            <ArrowRight width={20} height={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};
