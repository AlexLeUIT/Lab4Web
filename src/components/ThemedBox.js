import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemedBox = () => {
  const { theme } = useContext(ThemeContext);

  const boxStyle = {
    padding: '20px',
    marginTop: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
    color: theme === 'light' ? '#000' : '#fff',
  };

  return <div style={boxStyle}>This is a {theme} themed box!</div>;
};

export default ThemedBox;
