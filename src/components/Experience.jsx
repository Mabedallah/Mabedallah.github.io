import React from 'react';
import { motion } from 'framer-motion';
import { Database, HardDrive, Server } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Tikka Consulting PTY',
    period: '11/2023 - Present',
    description: 'Leading full-stack development and integrating modern AI solutions into enterprise architectures.',
    icon: <Database size={24} color="var(--accent-cyan)" />
  },
  {
    role: 'Software Engineer',
    company: 'LEADTOOLS',
    period: '11/2011 - 10/2023',
    description: 'Developed and maintained complex software components, focusing on performance and scalability over a decade.',
    icon: <Server size={24} color="var(--accent-purple)" />
  },
  {
    role: 'Software Developer',
    company: 'ICS',
    period: '08/2009 - 11/2011',
    description: 'Initiated professional career by building solid foundational skills in software development.',
    icon: <HardDrive size={24} color="#f0f0f5" />
  }
];

const Experience = () => {
  return (
    <>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="bento-box col-span-2 row-span-1"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          style={{ justifyContent: 'center' }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '16px' }}>
              {exp.icon}
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{exp.company}</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>{exp.period}</span>
              </div>
              <h4 style={{ color: 'var(--text-main)', fontWeight: 500, marginBottom: '0.5rem' }}>{exp.role}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                {exp.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Experience;
