import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Download({ Label }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/CV');
  };

  return (
    <div className={`inline-flex rounded-md bg-gradient-to-r from-blue-500 via-blue-300 to-green-400 p-1 ${isHovered ? 'feather-effect' : ''}`}>
      <motion.a
        onClick={handleClick}
        initial={{ "--x": "100%", scale: 1 }}
        animate={{ "--x": "-100%" }}
        whileTap={{ scale: 0.90 }}
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
        className="inline-flex items-center justify-center px-6 py-2 rounded-md relative radial-gradient cursor-pointer bg-gradient-to-b from-gray-200 to-transparent"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="text-neutral-100 tracking-wide font-light block relative linear-mask flex items-center">
          {Label} <span className="material-icons ml-2">file_open</span>
        </span>
        <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
      </motion.a>
    </div>
  );
}
