import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import '../css/ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle"
    >
      {theme === 'light' ? (
        <Moon className="theme-icon" size={30} color="black"/>
      ) : (
        <Sun className="theme-icon" size={30} color="yellow"/>
      )}
    </button>
  );
};

export default ThemeToggle;