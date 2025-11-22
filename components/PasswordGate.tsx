import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

interface PasswordGateProps {
  onUnlock: () => void;
}

const PasswordGate: React.FC<PasswordGateProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple client-side check for demonstration
    if (password.toUpperCase() === 'DEMONE' || password.toUpperCase() === 'GUEST') {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-[60] bg-[#050505] flex flex-col items-center justify-center px-4"
    >
      <div className="max-w-md w-full text-center">
        <Lock className="w-8 h-8 text-white mx-auto mb-6 opacity-50" />
        
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-white mb-2 tracking-tight">
          RESTRICTED ACCESS
        </h1>
        <p className="text-neutral-500 font-mono text-xs mb-12 tracking-widest">
          ENTER PASSWORD TO ENTER THE DISTRICT
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="PASSWORD"
            className={`bg-transparent border-b ${error ? 'border-red-500 text-red-500' : 'border-neutral-800 text-white'} py-3 text-center text-xl tracking-[0.5em] focus:outline-none focus:border-white transition-colors placeholder:tracking-normal placeholder:text-sm placeholder:text-neutral-800`}
            autoFocus
          />
          
          <button 
            type="submit"
            className="mt-8 bg-white text-black font-bold py-4 text-xs tracking-[0.2em] hover:bg-neutral-200 transition-colors uppercase"
          >
            Enter Site
          </button>
        </form>

        <div className="mt-12 text-[10px] text-neutral-700 font-mono">
          <p>NO PASSWORD?</p>
          <p className="mt-2">DROPS ARE LIMITED TO NEWSLETTER MEMBERS.</p>
          <p>REQUEST ACCESS BELOW.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PasswordGate;