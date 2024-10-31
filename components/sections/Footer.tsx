import Image from "next/image";
import logoImg from "@/public/assets/logosaas.png";
import { navItems } from "@/constants";
import Link from "next/link";
import { X } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="bg-black py-6">
      <div className="container">
        <div className="flex items-center flex-col gap-4">
          <Image src={logoImg} width={50} height={50} alt="logo" />

          <ul className="text-center flex flex-col gap-y-2 mt-4 md:flex-row md:gap-4">
            {navItems.map((item, i) => (
              <li key={i} className="text-white/50 capitalize">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            {Array(4)
              .fill(4)
              .map((_, i) => (
                <X className="text-white" key={i} />
              ))}
          </div>
          <p className="text-white/60 text-center">
            &copy; @2024 Your Company Inc.All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
