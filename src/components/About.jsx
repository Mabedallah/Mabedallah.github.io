import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cloud, Layout, Cpu } from 'lucide-react';

const clusters = [
  {
    id: 'ai-node',
    title: 'AI / ML Cluster',
    icon: <Bot size={24} color="var(--accent-purple)" />,
    items: ['Python', 'LLMs', 'Pinecone', 'NLP', 'Prompt Eng'],
    colSpan: 'col-span-1 row-span-1',
    borderColor: 'rgba(138, 43, 226, 0.4)'
  },
  {
    id: 'backend-node',
    title: 'Backend Core',
    icon: <Cloud size={24} color="var(--accent-cyan)" />,
    items: ['C# .NET', 'Java', 'C++', 'Azure', 'AWS'],
    colSpan: 'col-span-1 row-span-1',
    borderColor: 'rgba(0, 240, 255, 0.4)'
  },
  {
    id: 'frontend-node',
    title: 'Frontend & DevOps Array',
    icon: <Layout size={24} color="#f0f0f5" />,
    items: ['React', 'Angular', 'JS (ES6+)', 'Git', 'CI/CD Pipelines'],
    colSpan: 'col-span-2 row-span-1',
    borderColor: 'rgba(255, 255, 255, 0.2)'
  }
];

const About = () => {
  return (
    <>
      {clusters.map((cluster, index) => (
        <motion.div
          key={cluster.id}
          className={`bento-box ${cluster.colSpan}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ y: -5, borderColor: cluster.borderColor }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '12px' }}>
              {cluster.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>{cluster.title}</h3>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>STATUS: OPTIMAL <Cpu size={10} style={{display: 'inline'}}/></div>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
            {cluster.items.map((item, i) => (
              <span 
                key={i} 
                style={{ 
                  padding: '0.3rem 0.8rem', 
                  background: 'rgba(255,255,255,0.03)', 
                  border: `1px solid ${cluster.borderColor.replace('0.4', '0.2')}`,
                  borderRadius: '8px', 
                  fontSize: '0.8rem',
                  color: 'var(--text-main)'
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default About;
