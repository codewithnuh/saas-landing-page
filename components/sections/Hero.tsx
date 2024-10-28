import { ArrowRight } from "../icons";
import Button from "../ui/Button";
import cogImage from "@/public/assets/cog.png";
import cylinderImage from "@/public/assets/cylinder.png";
import Image from "next/image";
import noodleImage from "@/public/assets/noodle.png";
export const Hero = () => {
  return (
    // gradient in the hero section is due to the class
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        {/* Flex Container Starts Here*/}
        <div className="md:flex items-center ">
          {/* Content */}
          <div className="md:w-[470px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 tracking-tight rounded-lg">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to the productivity
            </h1>
            <p className="text-xl text-[#010DE3] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to
              transform your progress, motivate your efforts, and celebrate your
              success
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Button className={"btn-primary"}>Get for free</Button>
              <Button className={"btn-text gap-1 "}>
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          {/* Image */}
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 md:relative">
            <Image
              src={cogImage}
              alt="cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={cylinderImage}
              width={220}
              height={220}
              alt="cylinder image"
              className="hidden md:block -top-8 -left-32 absolute"
            />
            <Image
              src={noodleImage}
              width={220}
              height={220}
              className="absolute hidden left-[448px] rotate-[40deg] lg:block top-[543px]"
              alt="noodle image"
            />
          </div>
          {/* Flex Container Ends Here */}
        </div>
      </div>
    </section>
  );
};
