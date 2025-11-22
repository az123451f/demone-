import React from 'react';
import { motion } from 'framer-motion';
import { ARCHIVE_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-neutral-800 pb-8">
        <div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-white uppercase tracking-tighter">
            Visual Evidence
            </h2>
            <p className="text-neutral-500 mt-2 text-sm">
                See what we build.
            </p>
        </div>
        <div className="mt-4 md:mt-0">
             <span className="font-mono text-xs text-neutral-600 tracking-widest uppercase border border-neutral-800 px-4 py-2 rounded-full">
                Past Collections
             </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {ARCHIVE_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative cursor-none"
          >
            <div className="relative aspect-[4/5] bg-neutral-900 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src={item.url} 
                alt={item.alt} 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-2xl font-bold text-white font-heading uppercase tracking-tight">
                    {item.title}
                </h3>
                <p className="font-mono text-[10px] text-neutral-300 tracking-widest uppercase mt-1">
                    {item.season}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;