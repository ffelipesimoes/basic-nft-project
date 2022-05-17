import React from 'react'
import './Header.css'
import punkLogo from "../assets/header/cryptopunk-logo.png"
import searchIcon from "../assets/header/search.png"
import themeSwitchIcon from "../assets/header/theme-switch.png"
export const Header = () => {
  return (
    <div className='header'>
      <div className='logoContainer'>
        <img src={punkLogo} className='punkLogo' alt='logo' />
      </div>

      <div className='searchBar'>
        <div className='searchIconContainer'>
          <img src={searchIcon} alt='search' />
        </div>
        <input 
        className='searchInput'
        placeholder='Coleção, itens ou usuário'
        />
      </div>

      <div className='headerItems'>
        <p>Drop</p>
        <p>Marketplace</p>
        <p>Crie</p>
      </div>

      <div className='headerActions'>
        <div className='themeSwitchContainer'>
        <img src={themeSwitchIcon} alt='1' />
        </div>
      </div>

      <div className='loginButton'>
        login
      </div>

    </div>
  )
}
