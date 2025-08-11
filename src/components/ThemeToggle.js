import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const buttonStyle = {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    // backgroundColor: theme === 'light' ? '#333' : '#ddd',
    // color: theme === 'light' ? '#fff' : '#000',
    backgroundColor: '#c8dfc8',
    marginTop: '10px'
  };

  return <button style={buttonStyle} onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggle;
