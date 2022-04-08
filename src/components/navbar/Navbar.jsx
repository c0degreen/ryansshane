import React, { useState } from 'react'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='rss__navbar' id='navbar'>
      <div className='rss__navbar-logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='rss__navbar-links'>
        <div className='rss__navbar-links_container'>
          <a href='#navbar'>Home</a>
          <a href='#about'>About me</a>
          <a href='#news'>News</a>
          <a href='#partners'>Partners</a>
        </div>
      </div>
      <div className='rss__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='var(--white)' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='var(--white)' size={27} onClick={() => setToggleMenu(true)} />}
      </div>
      {toggleMenu && (
        <div className='rss__navbar-menu_container scale-up-center'>
            <a href='#navbar'>Home</a>
            <a href='#about'>About me</a>
            <a href='#news'>News</a>
            <a href='#partners'>Partners</a>
        </div>
      )}
    </div>
  )
}

export default Navbar