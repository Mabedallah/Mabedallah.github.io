import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award } from 'lucide-react';

const Projects = () => {
  return (
    <>
      {/* NLP Project */}
      <motion.div
        className="bento-box col-span-2 row-span-2"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-20%',
          width: '60%',
          height: '60%',
          background: 'var(--accent-cyan)',
          filter: 'blur(80px)',
          opacity: 0.15,
          zIndex: 0,
          borderRadius: '50%'
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Sparkles size={32} color="var(--accent-cyan)" />
            <span style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', border: '1px solid var(--accent-cyan)', padding: '0.2rem 0.5rem', borderRadius: '10px' }}>SIMULATION: ACTIVE</span>
          </div>
          
          <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Topic Analysis of Clothing Reviews</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flexGrow: 1 }}>
            An AI-driven project applying advanced Natural Language Processing (NLP) techniques to analyze sentiment and extract key topics from consumer clothing reviews, providing actionable business insights through multidimensional data parsing.
          </p>
          
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', padding: '0.4rem 1rem', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--accent-cyan)', borderRadius: '8px' }}>NLP</span>
            <span style={{ fontSize: '0.8rem', padding: '0.4rem 1rem', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--accent-cyan)', borderRadius: '8px' }}>Python</span>
            <span style={{ fontSize: '0.8rem', padding: '0.4rem 1rem', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--accent-cyan)', borderRadius: '8px' }}>Data Analysis</span>
          </div>
        </div>
      </motion.div>

      {/* Certification */}
      <motion.div
        className="bento-box col-span-2 row-span-2"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.02 }}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-20%',
          width: '60%',
          height: '60%',
          background: 'var(--accent-purple)',
          filter: 'blur(80px)',
          opacity: 0.15,
          zIndex: 0,
          borderRadius: '50%'
        }}></div>

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Award size={32} color="var(--accent-purple)" />
            <span style={{ fontSize: '0.7rem', color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)', border: '1px solid var(--accent-purple)', padding: '0.2rem 0.5rem', borderRadius: '10px' }}>CERTIFIED NODE</span>
          </div>
          
          <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>DataCamp Certification</h3>
          <p style={{ color: 'var(--text-muted)', flexGrow: 1 }}>
            Completed comprehensive training in data science and machine learning concepts through DataCamp, reinforcing practical skills in data manipulation, visualization, and AI models to construct robust machine learning pipelines.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
