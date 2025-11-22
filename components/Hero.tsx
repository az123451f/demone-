import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col justify-center items-center px-4 overflow-hidden bg-[#050505]">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] bg-neutral-900/20 blur-[100px] rounded-full animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 text-center flex flex-col items-center w-full max-w-[1400px]"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-6 md:mb-10"
        >
          <span className="text-[10px] md:text-xs font-mono text-neutral-500 tracking-[0.6em] md:tracking-[0.8em] uppercase bg-neutral-900/50 border border-neutral-800 px-4 py-2 rounded-full backdrop-blur-sm">
            Dropping Soon
          </span>
        </motion.div>

        <h1 className="font-heading font-black text-[13vw] md:text-[12rem] lg:text-[14rem] leading-[0.9] text-transparent stroke-white tracking-tighter select-none relative w-full text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="relative z-10 text-white mix-blend-overlay"
          >
            DEMONE
          </motion.div>
          <div className="absolute top-0 left-0 w-full h-full text-neutral-900 -z-10 blur-sm flex justify-center items-center">
            DEMONE
          </div>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 md:mt-12 flex flex-col items-center gap-4 w-full px-4"
        >
          <p className="text-sm md:text-xl text-neutral-400 font-medium max-w-md md:max-w-xl mx-auto leading-relaxed text-center">
            We are the silence in the noise. <br className="hidden md:block"/>
            <span className="text-white font-bold block md:inline mt-2 md:mt-0">Exclusive. Unlisted. Limited.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: "circOut" }}
          className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mt-12 md:mt-16"
        />
      </motion.div>
    </section>
  );
};

export default Hero;