import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div
      className="bento-box col-span-4 row-span-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(0, 240, 255, 0.02)',
        border: '1px solid rgba(0, 240, 255, 0.1)'
      }}
    >
      <div>
        <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>Transmission Hub</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '400px', fontSize: '0.9rem' }}>
          Signal your coordinates. Currently open for new AI and Full-Stack opportunities.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '2rem' }}>
        <motion.a
          href="mailto:mohamed.altoom@gmail.com"
          whileHover={{ y: -5, color: 'var(--accent-cyan)' }}
          style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}
        >
          <Mail size={32} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/mohamed-abed-allah-44a632237/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -5, color: 'var(--accent-purple)' }}
          style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}
        >
          <FaLinkedin size={32} />
        </motion.a>
        <motion.a
          href="https://github.com/Mabedallah"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -5, color: 'var(--text-main)' }}
          style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}
        >
          <FaGithub size={32} />
        </motion.a>
      </div>

      <div style={{ color: 'rgba(255, 255, 255, 0.2)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
        SYS.DATE: {new Date().getFullYear()}<br />
        STATUS: SECURE
      </div>
    </motion.div>
  );
};

export default Contact;
