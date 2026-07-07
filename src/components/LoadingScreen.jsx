import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const duration = 1800; // 1.8 seconds loading time
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoaded(true);
            setTimeout(onComplete, 600); // Wait for exit animation to complete
          }, 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-navy p-8 text-white select-none pointer-events-none"
        >
          {/* Header */}
          <div className="flex justify-between items-center text-xs tracking-widest text-slate-400 font-heading">
            <div>EST. 1966</div>
            <div>KAPOOR DYES & CHEMICALS</div>
          </div>

          {/* Logo & Tagline */}
          <div className="flex flex-col items-center justify-center flex-grow">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="relative mb-4 flex items-center justify-center">
                <span className="text-7xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-royal to-cyan">
                  KDC
                </span>
                <span className="absolute -bottom-2 right-0 bg-emerald text-navy text-[10px] font-bold px-2 py-0.5 rounded font-heading tracking-normal">
                  ISO 9001
                </span>
              </div>
              <p className="text-sm tracking-[0.2em] uppercase text-slate-400 font-heading max-w-md mx-auto px-4 mt-2">
                Committed to Customer. Committed to Quality.
              </p>
            </motion.div>
          </div>

          {/* Progress Bar & Percent */}
          <div className="w-full max-w-lg mx-auto flex flex-col space-y-4 mb-8">
            <div className="flex justify-between items-end font-heading text-xs text-slate-400">
              <span className="tracking-widest uppercase">INITIALIZING SYSTEM</span>
              <span className="text-3xl font-light text-white font-mono">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-[2px] bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-royal via-cyan to-emerald"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
