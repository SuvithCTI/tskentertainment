import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function SectionHeader({ title, subtitle, centered = true, fontClass = 'font-sagona' }) {
  const { currentTheme } = useTheme();

  return (
    <div className={`mb-8 sm:mb-10 ${centered ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-3xl'}`}>
      <h2 className={`${fontClass} text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-slate-900 leading-tight`}>
        {title}{' '}
        <span className={`${fontClass} font-semibold text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradient}`}>
          {subtitle}
        </span>
      </h2>
    </div>
  );
}
