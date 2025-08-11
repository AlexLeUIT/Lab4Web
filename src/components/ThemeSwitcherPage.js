import React from 'react';
import ThemeToggle from './ThemeToggle';
import ThemedBox from './ThemedBox';

const ThemeSwitcherPage = () => {
  const pageStyle = {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={pageStyle}>
      <h2>Theme Switcher</h2>
      <ThemeToggle />
      <ThemedBox />
    </div>
  );
};

export default ThemeSwitcherPage;
