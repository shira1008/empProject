import '../Navbar.css';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>Employees</div>
      <div className='nav-links'>
        <a href='#'>Home</a>
        <a href='#' className='active'>
          Employees
        </a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
