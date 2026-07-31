import { motion } from "framer-motion";
import GradientBackground from "./GradientBackground";

interface AnimatedHeroProps {
  title: string;

  description: string;

  children?: React.ReactNode;
}

export default function AnimatedHero({
  title,
  description,
  children,
}: AnimatedHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GradientBackground />

      <div className="relative z-10 max-w-5xl text-center px-6">
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-6xl font-bold tracking-tight">
          {title}
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mt-6 text-xl text-gray-500"
        >
          {description}
        </motion.p>

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
