import React from "react";
import { twMerge } from "tailwind-merge";
type ButtonProps = {
  type: "button" | "submit";
  className?: string;
  title: string;
};
const Button = ({ type, className, title }: ButtonProps) => {
  return (
    <button
      type={type}
      className={twMerge(
        className,
        "bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex  items-center justify-center tracking-tighter"
      )}
    >
      {title}
    </button>
  );
};

export default Button;
