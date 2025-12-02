import React from 'react';
import { SectionHeadingProps } from '../types';

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light = false }) => (
  <header className="mb-12 text-center">
    <h2 className={`text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 ${light ? 'text-white' : 'text-zinc-900'}`}>
      {title}
    </h2>
    <div className={`w-24 h-1 mx-auto mb-6 ${light ? 'bg-red-600' : 'bg-red-600'}`} aria-hidden="true"></div>
    {subtitle && (
      <p className={`max-w-2xl mx-auto text-lg ${light ? 'text-zinc-300' : 'text-zinc-600'}`}>
        {subtitle}
      </p>
    )}
  </header>
);
