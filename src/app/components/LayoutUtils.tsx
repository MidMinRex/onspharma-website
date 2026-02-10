import React from 'react';
import { motion } from 'motion/react';

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const MotionSection: React.FC<MotionSectionProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.45, 0.32, 0.9] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SectionHeader: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="mb-12">
    <h2 className={`text-3xl font-light tracking-tight ${light ? 'text-white' : 'text-slate-900'} mb-4`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`max-w-2xl text-lg ${light ? 'text-blue-100' : 'text-slate-600'} font-light leading-relaxed`}>
        {subtitle}
      </p>
    )}
    <div className={`h-1 w-20 mt-6 ${light ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
  </div>
);
