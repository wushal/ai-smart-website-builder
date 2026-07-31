import { motion } from "framer-motion";

const particles = new Array(30).fill(0);

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0">
      {particles.map((_, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,

            y: 0,
          }}
          animate={{
            opacity: [0, 1, 0],

            y: -200,
          }}
          transition={{
            duration: 5 + Math.random() * 5,

            repeat: Infinity,

            delay: index * 0.2,
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,

            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
