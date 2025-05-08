import '../Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className='navbar'>
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
    </div>
  );
};

export default Navbar;
