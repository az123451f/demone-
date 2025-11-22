import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    setMessage('');

    try {
        // ---------------------------------------------------------
        // BACKEND INTEGRATION NOTE:
        // Replace this setTimeout with your actual API call.
        // Example:
        // const response = await fetch('/api/newsletter-signup', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ email })
        // });
        // if (!response.ok) throw new Error('Subscription failed');
        // ---------------------------------------------------------
        
        // Simulating network request
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simulating success
        setStatus('success');
        setEmail('');
        
    } catch (error) {
        console.error(error);
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="newsletter" className="py-40 px-4 bg-[#050505] relative overflow-hidden border-t border-neutral-900">
      
      <div className="max-w-xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading font-black text-4xl md:text-6xl text-white mb-6 uppercase tracking-tight">
            Secure Your Spot
          </h2>
          <p className="text-neutral-500 mb-12 font-mono text-xs tracking-[0.1em] leading-loose">
            THE NEXT DROP IS IMPENDING.<br/>
            ENTER YOUR EMAIL TO RECEIVE EARLY ACCESS CODES.
          </p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full"
        >
          <div className="relative group">
            <input
              type="email"
              placeholder="ENTER EMAIL ADDRESS"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading' || status === 'success'}
              className="w-full bg-transparent border border-neutral-800 py-4 text-center text-white placeholder:text-neutral-700 focus:outline-none focus:border-white focus:bg-neutral-900/30 transition-all uppercase tracking-widest font-bold text-lg disabled:opacity-50 font-heading"
            />
            
            <button 
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neutral-500 hover:text-white transition-colors disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                  <ArrowRight className="w-5 h-5" />
              )}
            </button>
          </div>
          
          {status === 'success' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-center justify-center gap-2 p-4 border border-green-900/30 bg-green-900/10 text-green-400 font-mono text-[10px] tracking-widest uppercase"
            >
              <CheckCircle className="w-3 h-3" />
              <span>YOU ARE ON THE LIST. STANDBY.</span>
            </motion.div>
          )}

          {status === 'error' && (
             <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="mt-6 flex items-center justify-center gap-2 p-4 border border-red-900/30 bg-red-900/10 text-red-400 font-mono text-[10px] tracking-widest uppercase"
           >
             <AlertCircle className="w-3 h-3" />
             <span>{message || 'CONNECTION FAILED.'}</span>
           </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Newsletter;