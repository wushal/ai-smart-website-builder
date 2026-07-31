import { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  industry?: "technology" | "medical" | "ecommerce" | "cross-border";
  size?: "sm" | "md" | "lg";
}

const industryStyles = {
  technology: {
    primary: "bg-gray-900 text-white hover:bg-gray-800 rounded-lg",
    secondary: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 rounded-lg",
    ghost: "hover:bg-gray-100 text-gray-700 rounded-lg",
  },
  medical: {
    primary: "bg-blue-500 text-white hover:bg-blue-600 rounded-full",
    secondary: "bg-white text-blue-500 border border-blue-200 hover:bg-blue-50 rounded-full",
    ghost: "hover:bg-blue-50 text-blue-600 rounded-full",
  },
  ecommerce: {
    primary: "bg-red-500 text-white hover:bg-red-600 rounded-xl",
    secondary: "bg-white text-red-500 border border-red-200 hover:bg-red-50 rounded-xl",
    ghost: "hover:bg-red-50 text-red-600 rounded-xl",
  },
  "cross-border": {
    primary: "bg-blue-600 text-white hover:bg-blue-700 rounded-lg",
    secondary: "bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 rounded-lg",
    ghost: "hover:bg-blue-50 text-blue-600 rounded-lg",
  },
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  industry = "technology",
  size = "md",
  ...props
}: ButtonProps) {
  const baseStyles = "font-medium transition-all duration-200";
  const style = `${baseStyles} ${industryStyles[industry][variant]} ${sizeStyles[size]}`;

  const shouldAnimate = industry !== "medical";

  return (
    <motion.button
      whileHover={shouldAnimate ? { scale: 1.02 } : {}}
      whileTap={shouldAnimate ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={style}
      {...props}
    >
      {children}
    </motion.button>
  );
}