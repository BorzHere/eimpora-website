import React from 'react';

export default function SectionHeading({ eyebrow, title, description, center = false, dark = true }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur-md mb-4 ${
            dark
              ? 'border border-brand-500/30 bg-brand-500/10 text-brand-400'
              : 'border border-brand-600/30 bg-brand-50 text-brand-700'
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${dark ? 'bg-brand-400' : 'bg-brand-600'}`} />
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight ${
          dark ? 'text-white' : 'text-navy-950'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed text-pretty ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
