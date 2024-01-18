import { cn } from "@/utils/cn";
import React from "react";

type BtnProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button: React.FC<BtnProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button {...props} className={cn(`btn btn-primary w-full mt-5 text-white`, className)}>
      {children}
    </button>
  );
};

export default Button;
