import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  type: "button" | "submit";
  className?: string;
  children?: React.ReactNode | string;
};

const Button: React.FC<ButtonProps> = ({ type, className, children }) => {
  return (
    <button type={type} className={twMerge(className, "btn")}>
      {children}
    </button>
  );
};

export default Button;
