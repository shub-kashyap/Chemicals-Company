import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const phoneNumber = '919838441481';
  const message = encodeURIComponent("Hello Kapoor Dyes, I'm interested in your product catalogue.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out font-heading font-bold text-xs uppercase tracking-wider whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
