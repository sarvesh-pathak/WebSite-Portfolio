import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from '../../needs/My Movie.mp4'
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
        <div className='me'>
        <video controls autoplay>
        <source src={ME} type="video/mp4"></source>
        </video>

        </div>
        <a href='#contact' className='scroll_down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header