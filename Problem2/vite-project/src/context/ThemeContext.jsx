import React, { createContext, useState, useContext } from 'react';

const themes = {
  light: {
    background: '#f0f0f0',
    text: '#333333',
  },
  dark: {
    background: '#222222',
    text: '#ffffff',
  },
};

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[currentTheme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
