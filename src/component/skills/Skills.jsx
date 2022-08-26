import React from 'react'
import './skills.css'
import{FaPython} from "react-icons/fa"
import{FaJava} from "react-icons/fa"
import{SiCplusplus} from "react-icons/si"
import{SiRobotframework} from "react-icons/si"
import{SiSmartthings} from "react-icons/si"
import{AiFillCloud} from "react-icons/ai"
import {GiSpiderWeb} from "react-icons/gi"
const Skills = () => {
  return (
    <section id='skills'>
      <h5>Here Are My Skills</h5>
      <div className='container skills__container'>
        <div className='Skills'>
          <h3>My Skills</h3>
          <div className='Content'>

            <article className='Details'>
              <FaPython/>
              <h4>Python</h4>
              <small className='text-ligth'>Experienced</small>
            </article>
            <article className='Details'>
              <FaJava/>
              <h4>Java</h4>
              <small className='text-ligth'>Experienced</small>
            </article>
            <article className='Details'>
              <SiCplusplus/>
              <h4>C++</h4>
              <small className='text-ligth'>Experienced</small>
            </article>
            <article className='Details'>
              <AiFillCloud/>
              <h4>Cloud Computing</h4>
              <small className='text-ligth'>Experienced</small>
            </article>
            <article className='Details'>
              <SiSmartthings/>
              <h4>Internet of Things</h4>
              <small className='text-ligth'>Experienced</small>
            </article>
            <article className='Details'>
              <SiRobotframework/>
              <h4>Machine learning</h4>
              <small className='text-ligth'>Experienced</small>
            </article>
            <article className='Details'>
              <GiSpiderWeb/>
              <h4>Website Development</h4>
              <small className='text-ligth'>Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills