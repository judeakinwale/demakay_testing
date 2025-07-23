import React from "react";
import styles from "./styles.module.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  text,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(styles.button, styles[variant], className)}
      {...props}
    >
      {text} <HiArrowLongRight size={20} />
    </button>
  );
}
