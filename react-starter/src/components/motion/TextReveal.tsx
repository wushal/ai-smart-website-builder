import { motion } from "framer-motion";

interface Props {
  text: string;
}

export default function TextReveal({ text }: Props) {
  const words = text.split("");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {words.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: {
              opacity: 0,

              y: 20,
            },

            visible: {
              opacity: 1,

              y: 0,
            },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
