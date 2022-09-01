import React from 'react'
import './about.css'
import {FaUserGraduate} from "react-icons/fa"
import{GiHammerNails} from"react-icons/gi"
import{MdOutlineSportsMotorsports} from "react-icons/md"
const About = () => {
  return (
    <section id='about'>
     <h2>Get To Know About Me</h2>
     <div className='container about__container'>
     <div className='about__me'>
      <div className='about__me-image'>


  <div class="steam" id="steam1"> </div>
  <div class="steam" id="steam2"> </div>
  <div class="steam" id="steam3"> </div>
  <div class="steam" id="steam4"> </div>

  <div id="cup">
    <div id="cup-body">
      <div id="cup-shade"></div>
    </div>
    <div id="cup-handle"></div>
  </div>

  <div id="saucer"></div>

  <div id="shadow"></div>

         </div>
       </div>
       <div className='about__content`'>
         <div className='about__cards'>
          <article className="about__card">
           <FaUserGraduate className="About__Icon"/>
            <h5>Student</h5>
            <small>I am a B.Tech Student currently in 3rd Year</small>
            </article>
            <article className='about__card'>
           <GiHammerNails className="About__Icon"/>
            <h5>Projects</h5>
            <small>I have done projects in IOT, AI and Web Devlopment</small>
            </article>
            <article className='about__card'>
           <MdOutlineSportsMotorsports className="About__Icon"/>
            <h5>Passion</h5>
            <small>I like to solve challenging problem in competitive programming or on LeetCode <br/>
                    I also like to read books and play music
            </small>
            </article>
            </div>
            <p className='mi'>
              Grab a coffe or tea as YOU read about me.<br/>Hi I am Sarvesh Pathak I am a B.Tech Student currently in my 3rd year. I am a Software develper who likes to work at backend. I love to solve 
              problem and likely to say yes to a hard one. I have been writing programmes for past 7 years 
            </p>

            <a href="#contact" className='bt'>Message Me</a>
      </div>
      </div>
    </section>
  )
}

export default About