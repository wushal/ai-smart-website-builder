import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  industry?: "technology" | "medical" | "ecommerce" | "cross-border";
  type?: "default" | "feature" | "product" | "testimonial";
  hoverable?: boolean;
}

const industryStyles = {
  technology: {
    default: "bg-gray-900 border-gray-700 shadow-lg",
    feature: "bg-gray-800 border-gray-700 shadow-md hover:shadow-xl",
    product: "bg-gray-800 border-gray-700 shadow-xl",
    testimonial: "bg-gray-800 border-gray-700 shadow-md",
  },
  medical: {
    default: "bg-white border-gray-200 shadow-sm",
    feature: "bg-white border-blue-100 shadow-sm hover:shadow-md",
    product: "bg-white border-gray-200 shadow-md",
    testimonial: "bg-blue-50 border-blue-100 shadow-sm",
  },
  ecommerce: {
    default: "bg-white border-gray-100 shadow-sm",
    feature: "bg-white border-gray-100 shadow-sm hover:shadow-lg",
    product: "bg-white border-gray-100 shadow-md hover:shadow-xl",
    testimonial: "bg-white border-gray-100 shadow-sm",
  },
  "cross-border": {
    default: "bg-white border-gray-100 shadow-sm",
    feature: "bg-white border-gray-100 shadow-sm hover:shadow-md",
    product: "bg-white border-gray-100 shadow-md",
    testimonial: "bg-gray-50 border-gray-100 shadow-sm",
  },
};

const typeRadius = {
  default: "rounded-xl",
  feature: "rounded-2xl",
  product: "rounded-3xl",
  testimonial: "rounded-xl",
};

const hoverAnimations = {
  technology: { y: -4, scale: 1.02 },
  medical: { y: 0, scale: 1 },
  ecommerce: { y: -6, scale: 1.02 },
  "cross-border": { y: -4, scale: 1.01 },
};

export default function Card({
  children,
  className = "",
  industry = "technology",
  type = "default",
  hoverable = true,
}: Props) {
  const baseStyles = `border p-6 transition-all duration-300 ${industryStyles[industry][type]} ${typeRadius[type]}`;
  const combinedStyles = `${baseStyles} ${className}`;

  return (
    <motion.div
      whileHover={hoverable ? hoverAnimations[industry] : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={combinedStyles}
    >
      {children}
    </motion.div>
  );
}