import React from 'react'
import '../styles/header.css'
const Header = () => {
  return (
    <div>
      <header>
      <div className="logo">ABC Kids</div>
  <div className="controls">
    <button className="header-btn">🇰🇿 KZ</button>
    <button className="header-btn">🔊</button>
    <button className="header-btn">🏠</button>
  </div>
      </header>
    </div>
  )
}

export default Header
