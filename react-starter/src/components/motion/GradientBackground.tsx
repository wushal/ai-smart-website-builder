import { motion } from "framer-motion";

export default function GradientBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
    >
      <motion.div
        animate={{
          x: ["-20%", "20%", "-20%"],

          y: ["0%", "20%", "0%"],
        }}
        transition={{
          duration: 15,

          repeat: Infinity,

          ease: "linear",
        }}
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 blur-3xl opacity-30"
      />
    </div>
  );
}
