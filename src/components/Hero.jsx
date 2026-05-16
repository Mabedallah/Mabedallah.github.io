import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, BrainCircuit, Activity } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "> Initializing Neural Link...\n> Connection established.\n> Welcome to Moe's Core.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="bento-box col-span-2 row-span-2"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ padding: '0.5rem 1rem', background: 'rgba(0, 240, 255, 0.1)', borderRadius: '20px', border: '1px solid var(--accent-cyan)' }}>
          <span style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Activity size={14} /> SYSTEM: ONLINE
          </span>
        </div>
        <BrainCircuit size={32} color="var(--accent-purple)" style={{ opacity: 0.5 }} />
      </div>

      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '2rem 0' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
          Identity Node:<br />
          <span className="gradient-text">Mohamed (Moe)</span>
        </h1>
        <h2 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: 400 }}>
          Senior Software Engineer & Associate AI Engineer
        </h2>
      </div>

      <div style={{ 
        background: 'rgba(0,0,0,0.5)', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        fontFamily: 'var(--font-mono)',
        fontSize: '0.9rem',
        color: '#00ff00',
        minHeight: '100px',
        border: '1px solid rgba(0, 255, 0, 0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
          <Terminal size={16} /> terminal
        </div>
        <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{text}<span style={{ animation: 'blink 1s step-end infinite' }}>_</span></pre>
      </div>

      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
};

export default Hero;
