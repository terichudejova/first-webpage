import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./NavigationBar.css"

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="hamburger-menu">
        <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <a href="#landingPage">O nás</a>
          <a href="#nadpis">Nabídka</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </div>
    );
  }