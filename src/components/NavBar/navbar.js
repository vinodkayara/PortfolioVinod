import React, { useState } from 'react';
import './navbar.css';
import logo from '../NavBar/logo.png'// Ensure this path is correct
import contactImg from '../../assets/contact.png';
import menu from '../NavBar/menu.png';
import {Link} from 'react-scroll';
const Navbar = () => {
  const[showMenu, setShowMenu]= useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">What I Do</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Experience</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Project</Link>
      </div>

      <img src={menu} alt="Menu" className="mobMenu"  onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>What I Do</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Experience</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Project</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
      <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});


      }}>
        <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me </button>
    </nav>
  );
};

export default Navbar;
