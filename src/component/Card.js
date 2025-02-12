import React, { useState } from 'react';
import SkillBadge from './Skillbadge';
import { motion } from 'framer-motion';
import '../App.css';

export default function Card({ Date, Role, Description, Skills, Link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={Link} className="block cursor-pointer">
      <motion.div
        className="flex divide-gray-200 overflow-hidden px-4 py-4 rounded-lg bg-transparent"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0)'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="lg:w-48 w-20 text-sm text-slate-400 italic pt-1">
          {Date}
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between px-2 sm:px-3 text-xl font-semibold">
            {Role}
            <motion.span
              className="material-icons ml-2 mb-auto"
              animate={{
                scale: isHovered ? 1.2 : 1,
                x: isHovered ? 4 : 0,
                y: isHovered ? -4 : 0
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              open_in_new
            </motion.span>
          </div>
          <div className="px-2 py-2 sm:p-3 text-slate-300 font-normal">
            {Description}
          </div>
          <div className="px-2">
            <div className="flex flex-wrap">
              {Skills.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </a>
  );
}
