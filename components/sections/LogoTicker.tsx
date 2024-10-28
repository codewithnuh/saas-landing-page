import achemeLogo from "@/public/assets/logo-acme.png";
import apexLogo from "@/public/assets/logo-apex.png";
import celestialLogo from "@/public/assets/logo-celestial.png";
import echoLogo from "@/public/assets/logo-echo.png";
import pulseLogo from "@/public/assets/logo-pulse.png";
import quantumLogo from "@/public/assets/logo-quantum.png";

import Image from "next/image";
export const LogoTicker = () => {
  const logos = [achemeLogo, apexLogo, celestialLogo, pulseLogo, quantumLogo];
  return (
    <div>
      <div className="container">
        <div>
          {logos.map((item, i) => (
            <Image src={item} key={i} alt="logo" width={400} height={399} />
          ))}
        </div>
      </div>
    </div>
  );
};
