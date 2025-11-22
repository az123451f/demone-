import React from 'react';
import { BRAND_NAME, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] border-t border-neutral-900 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-2xl font-heading font-bold tracking-tighter text-white">
          {BRAND_NAME}
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <a 
                href={SOCIAL_LINKS.INSTAGRAM} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-mono text-neutral-500 hover:text-white transition-colors tracking-[0.2em] uppercase p-2"
            >
                Instagram
            </a>
            <a 
                href={SOCIAL_LINKS.TIKTOK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-mono text-neutral-500 hover:text-white transition-colors tracking-[0.2em] uppercase p-2"
            >
                TikTok
            </a>
        </div>

        <div className="text-neutral-800 text-[10px] font-mono tracking-widest">
          © {new Date().getFullYear()} DEMONE.DIST
        </div>
      </div>
    </footer>
  );
};

export default Footer;