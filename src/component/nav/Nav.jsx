import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import{SiAboutdotme} from 'react-icons/si'
import{GiHammerNails} from 'react-icons/gi'
import{GiSkills} from 'react-icons/gi'
import{MdCalendarToday} from 'react-icons/md'
import{TiMessages} from 'react-icons/ti'
import { useState } from 'react'
const Nav = () => {
  const[activeNav,setActiveNav]=useState('#');
  return (
    <nav>
      <a href='#home' onClick={()=>setActiveNav('#')}className={activeNav==='#'?'active':''}><ImHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')}className={activeNav==='#about'?'active':''}
      ><SiAboutdotme size={25}/></a>
      <a href='#skills'onClick={()=>setActiveNav('#skills')}className={activeNav==='#skills'?'active':''}><GiSkills/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')}className={activeNav==='#experience'?'active':''}><GiHammerNails/></a>
      <a href='#test' onClick={()=>setActiveNav('#test')}className={activeNav==='#test'?'active':''}><MdCalendarToday/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')}className={activeNav==='#contact'?'active':''}><TiMessages/></a>
    </nav>
  )
}

export default Nav