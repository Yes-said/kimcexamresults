import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
  <nav>
        <Link to="/" className='title'>
            Website
        </Link>
        <div className='menu' onClick={() =>{
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
<ul className={menuOpen ? "open" : ""}>
    <li>
        <Link to="/About">About</Link>
    </li>
    <li>
    <Link to="/Services">Services</Link>
    </li>
    <li>
    <Link to="/Contacts">Contacts</Link>
    </li>
</ul>
  </nav>
  );
};
export default Navbar
