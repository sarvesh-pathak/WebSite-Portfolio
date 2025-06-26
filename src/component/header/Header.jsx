import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from '../../needs/My_Movie.gif'
import Socials from './Socials'
const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container" >
        <h5 color='black'>Hello I am</h5>
        <h1>Sarvesh Pathak</h1>
        <h5 className="text-ligth">Software Developer</h5>
        <CTA/>
        <Socials/>
        <div>
        <img src={ME} alt="" className='me'/>
        </div>
        <a href='#contact' className='scroll_down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header