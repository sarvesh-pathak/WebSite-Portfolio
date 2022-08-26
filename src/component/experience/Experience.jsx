import React from 'react'
import './experience.css'
import imgt from "../../needs/3.png"
const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Projects</h5>
      <h2>Projects</h2>
      <div className='container projects'>
  
        <article className='project_items'>
          <div className="project_item-image">
            <img src={imgt} alt=""/>
          </div>
          <h3>Project1</h3>
          <a href='' className='btn' target="_blank">GITHUB</a>
        </article>

      </div>
    </section>
  )
}

export default Experience