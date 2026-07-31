import { motion } from "framer-motion";

interface Props {
  title: string;

  description?: string;
}

export default function SectionTitle({
  title,

  description,
}: Props) {
  return (
    <div
      className="
text-center
mb-16
"
    >
      <motion.h2
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className="
text-4xl
font-bold
"
      >
        {title}
      </motion.h2>

      {description && (
        <p
          className="
mt-4
text-gray-500
text-lg
"
        >
          {description}
        </p>
      )}
    </div>
  );
}
