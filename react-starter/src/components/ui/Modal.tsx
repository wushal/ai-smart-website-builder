import { motion } from "framer-motion";

interface Props {
  open: boolean;

  onClose: () => void;

  children: React.ReactNode;
}

export default function Modal({
  open,

  onClose,

  children,
}: Props) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{
          scale: 0.9,

          opacity: 0,
        }}
        animate={{
          scale: 1,

          opacity: 1,
        }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl p-8"
      >
        {children}
      </motion.div>
    </div>
  );
}
