import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function ScrollReveal({ children }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,

        y: 50,
      }}
      whileInView={{
        opacity: 1,

        y: 0,
      }}
      viewport={{
        once: true,

        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      {children}
    </motion.div>
  );
}
