import React, { useState } from 'react';
import logoCombi from '/public/assets/logo/logo-combi.png'
import '../styles/header.css'

function Header() {
  const [count, setCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header id="navbar">
        <a href="#home"><img src={logoCombi} alt="logo" /></a>
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((s) => !s)}
        >
          <span className="hamburger" />
        </button>
        <nav className={menuOpen ? 'open' : ''}>
            <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
            <a href="#promo" onClick={() => setMenuOpen(false)}>Promo</a>
            <a href="#visit-us" onClick={() => setMenuOpen(false)}>Visit us</a>
        </nav>
      </header>
    </>
  )
}

export default Header
