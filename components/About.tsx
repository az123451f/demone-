import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-[#050505] relative overflow-hidden border-t border-neutral-900/50">
      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10 text-center md:text-left">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[0.9] tracking-tight mb-8 md:mb-12">
            WE DON'T CHASE <br/>
            <span className="text-neutral-800">TRENDS.</span>
          </h2>
          <div className="w-full h-[1px] bg-neutral-900" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
             <h3 className="font-mono text-[10px] md:text-xs text-red-500 tracking-widest uppercase mb-4 md:mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"/>
                Identity
             </h3>
             <p className="text-base md:text-lg text-neutral-300 leading-relaxed font-medium">
                DEMONE is not for everyone. It is for the few who understand that true style is about <span className="text-white">precision</span>, not volume.
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
             <h3 className="font-mono text-[10px] md:text-xs text-neutral-600 tracking-widest uppercase mb-4 md:mb-6">
                Scarcity
             </h3>
             <p className="text-sm md:text-base text-neutral-400 leading-loose">
                The industry is flooded with noise. We operate in the shadows. Our drops are limited by nature, not by marketing. Once a silhouette is gone, it remains in the archive forever. 
                <br/><br/>
                No restocks. No compromises.
             </p>
          </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-20 md:mt-32 text-center"
        >
            <p className="font-heading text-xl md:text-4xl text-white uppercase tracking-tighter">
                "Excellence cannot be mass produced."
            </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;