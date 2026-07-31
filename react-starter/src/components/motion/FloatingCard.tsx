import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function FloatingCard({ children }: Props) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,

        repeat: Infinity,

        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.05,
      }}
      className="rounded-3xl shadow-2xl"
    >
      {children}
    </motion.div>
  );
}
