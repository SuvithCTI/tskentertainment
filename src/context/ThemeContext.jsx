import React, { createContext, useContext, useState } from 'react';
import { COLOR_THEMES } from '../data/eventData';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return COLOR_THEMES[0];
  });

  const selectTheme = (themeId) => {
    const found = COLOR_THEMES.find(t => t.id === themeId);
    if (found) {
      setCurrentTheme(found);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, selectTheme, themes: COLOR_THEMES }}>
      <div data-theme={currentTheme.id} className="min-h-screen bg-[#F8F9FC] text-slate-800 transition-colors duration-300">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
