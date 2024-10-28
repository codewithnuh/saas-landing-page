import { navItems } from "@/constants";
import { ArrowRight, MenuIcon } from "../icons";
import logo from "@/public/assets/logosaas.png";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
export const Navbar = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-10">
      <div className="flex  justify-center items-center py-3 gap-3 bg-black">
        <p className="text-white/60 hidden md:block ">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p className="text-white">Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center text-white" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={logo} alt="logo" width={40} height={40} />
            <MenuIcon className="h-5 w-5 text-black md:hidden" />
            <nav className=" hidden md:block">
              <ul className="flex items-center gap-6 text-black/60 capitalize">
                {navItems.map((item, i) => (
                  <li key={i}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
                <Button className="btn-primary" type="button">
                  Get Started
                </Button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
