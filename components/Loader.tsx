import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(onComplete, 500);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-[100] bg-[#050505] text-white flex flex-col justify-center items-center"
    >
      <div className="w-64">
        <div className="flex justify-between mb-2">
           <span className="font-mono text-xs text-neutral-500">LOADING</span>
           <span className="font-mono text-xs text-white">{progress}%</span>
        </div>
        <div className="w-full h-[2px] bg-neutral-900">
          <motion.div 
            className="h-full bg-white"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;