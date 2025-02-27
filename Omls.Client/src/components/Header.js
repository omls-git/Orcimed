import React from 'react'
import '../styles/Header.css'
import Logo from '../images/ocmlsLogo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='headerSec'>
      <img src={Logo} alt='OMLS Logo'/>
      <div className='navItems'>
        <Link to="/" id='navLinks'>HOME</Link>
        <Link to='/about' id='navLinks'>ABOUT</Link>
        <Link to="/services" id='navLinks'>SERVICES</Link>
        <Link to='/careers' id='navLinks'>CAREERS</Link>
        <Link to='/news-blog' id='navLinks'>NEW & BLOG</Link>
        <Link to='/contact' id='navLinks'>CONTACT US</Link>
      </div>
    </div>
  )
}

export default Header