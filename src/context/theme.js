import React, { useState, useContext, createContext, useEffect } from 'react';

const ThemeContext = createContext();

ThemeContext.displayName = 'ThemeContext';

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light');

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

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
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
