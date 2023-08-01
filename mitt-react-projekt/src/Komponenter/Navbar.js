import React from 'react'
import { Link } from 'react-router-dom';
import styles from './CSS/NavbarFooter.css';

const Navbar = () => {
  return (
    <nav className={styles.links}>
      <Link id='Home' to="/"> 
        <h2>Elin Nilsson</h2>
      </Link>
      <div>
        <Link to="/Portfolio">Min Portfolie</Link>
        <Link to="/CV">Mitt CV</Link>
        <Link to="/OmMig">Kontaktinformation</Link>
      </div>
    </nav>
  );
};

export default Navbar