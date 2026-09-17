import React from 'react';

export default function GlassCard({ children, className = '', hoverGlow = true, dark = true }) {
  return (
    <div
      className={`relative rounded-2xl transition-all duration-300 ${
        dark ? 'glass-card-dark text-white' : 'glass-card-light text-navy-950 shadow-sm'
      } ${
        hoverGlow ? 'hover:border-brand-500/40 hover:shadow-cyan-glow hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
