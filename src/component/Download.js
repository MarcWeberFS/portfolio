import { motion } from "framer-motion";

export default function Download({ Label, Link }) {
  return (
    <motion.a
      href={Link}
      download
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.90 }}
      whileHover={{ scale: 1.05 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="inline-flex items-center justify-center px-6 py-2 rounded-md relative radial-gradient"
    >
      <span className="text-neutral-100 tracking-wide font-light block relative linear-mask flex items-center">
        {Label} <span className="material-icons ml-2">download</span>
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.a>
  );
}
