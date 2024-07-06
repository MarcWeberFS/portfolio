import React from 'react';
import { motion } from 'framer-motion';

export default function Download({ Label, Link }) {
    return (
        <motion.a 
            whileHover={{ scale: 1.1, backgroundColor: "#172554", borderColor: "#6366f1", color: "#ffffff" }}
            className="px-4 py-2 backdrop-blur-sm border bg-blue-300/10 border-blue-500/20 text-white mx-auto text-center rounded-full relative mt-4" 
            href={Link} 
            download
        >
            {Label}
            <span className="material-icons ml-2 mb-auto text-lg">
                download
            </span>
        </motion.a>
    );
}
