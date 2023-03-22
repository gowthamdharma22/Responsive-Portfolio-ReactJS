import React, { useRef } from "react";
import "./Navbar.css"

export default function Navbar() {
  const menuRef = useRef(null);
  const navRef = useRef(null);

  const handleClick = () => {
    if (menuRef.current.classList.contains('bx-x')) {
      menuRef.current.classList.remove('bx-x');
      navRef.current.classList.remove('active');
    } else {
      menuRef.current.classList.add('bx-x');
      navRef.current.classList.add('active');
    }
  };

  return (
    <header className="head">
      <a href="#home"><img src="img/logo.png" className="logo" /></a>
      <i className='bx bx-menu' id="menu" ref={menuRef} onClick={handleClick}></i>
      <nav className="nav" ref={navRef}>
        <a href="#home" onClick={handleClick}>Home</a>
        <a href="#about" onClick={handleClick}>About</a>
        <a href="#skills" onClick={handleClick}>Skills</a>
        <a href="#projects" onClick={handleClick}>Projects</a>
        <a href="#contact" onClick={handleClick}>Contact</a>
      </nav>
    </header>
  );
}
