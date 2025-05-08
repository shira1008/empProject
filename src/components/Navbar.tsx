import '../Navbar.css';
import { useState } from 'react';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme(); // Using theme context to get the current theme and toggle function

  return (
    <div className={`navbar ${theme}`}>
      <div className='logo'>
        <span className='material-symbols-outlined'>account_circle</span>
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href='#'>Home</a>
        <a href='#' className='active'>
          Employees
        </a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </div>

      <div className='menu-icon' onClick={() => setIsOpen(!isOpen)}>
        <span className='material-icons'>menu</span>
      </div>

      {/* Add a button to toggle the theme */}
      <button className='theme-toggle' onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark' : '🌞 Light'}
      </button>
    </div>
  );
};

export default Navbar;
