import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:py-8 mix-blend-difference text-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center gap-3"
        >
           <a href="#" className="font-heading font-black text-lg md:text-xl tracking-tighter hover:opacity-70 transition-opacity">
             DEMONE.DIST
           </a>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 items-center">
          {NAV_ITEMS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + (i * 0.1) }}
              className="text-[10px] tracking-[0.3em] font-bold hover:text-neutral-400 transition-colors uppercase group relative"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: '100vh' }}
          exit={{ opacity: 0, height: 0 }}
          className="fixed top-0 left-0 w-full h-screen bg-black z-50 flex flex-col justify-center items-center"
        >
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2 text-white">
             <X size={32} />
          </button>
          
          <div className="flex flex-col gap-8 text-center">
            {NAV_ITEMS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-heading text-3xl md:text-4xl font-bold text-white hover:text-neutral-400 transition-all duration-300 uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links in Mobile Menu */}
          <div className="absolute bottom-16 flex flex-col items-center gap-4">
             <p className="text-[10px] text-neutral-600 font-mono uppercase tracking-widest mb-2">Connect</p>
             <div className="flex gap-8">
                <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-neutral-400 uppercase tracking-widest hover:text-white">Instagram</a>
                <a href={SOCIAL_LINKS.TIKTOK} target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-neutral-400 uppercase tracking-widest hover:text-white">TikTok</a>
             </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;