import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function CallButton() {
  const phoneNumber = '+919838441481';
  const url = `tel:${phoneNumber}`;

  return (
    <motion.a
      href={url}
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-6 z-40 flex items-center justify-center bg-royal hover:bg-royal-dark text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Call Kapoor Dyes & Chemicals"
    >
      <FiPhone className="text-2xl text-white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out font-heading font-bold text-xs uppercase tracking-wider whitespace-nowrap text-white">
        Call Support
      </span>
      {/* Pulsing visual indicator ring */}
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
      </span>
    </motion.a>
  );
}
