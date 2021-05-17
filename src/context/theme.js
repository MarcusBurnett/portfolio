import React, { useState, useContext, createContext, useEffect } from 'react';
import { midnightBlue } from '../styles/colors';

const ThemeContext = createContext();

ThemeContext.displayName = 'ThemeContext';

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('dark');
  const [themeChanging, setThemeChanging] = useState(false);

  useEffect(() => {
    const getTheme = async () => {
      try {
        const savedTheme = await localStorage.getItem('theme');

        if (savedTheme) setTheme(savedTheme);
      } catch {
        // no error handling
      }
    };

    getTheme();
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === 'dark' ? midnightBlue : '#FFFFFF';
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    setThemeChanging(true);
    setTimeout(() => {
      setThemeChanging(false);
    }, 400);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        themeChanging,
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  return context || {};
};

export { ThemeProvider, useTheme };
