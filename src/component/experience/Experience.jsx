import React from 'react'
import './experience.css'
import imgt from "../../needs/prj1.jpg"
import imgt1 from "../../needs/prj2.jpg"
import imgt2 from "../../needs/prj3.jpg"
const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Projects</h5>
      <h2>Projects</h2>
      <div className='container projects'>
  
        <article className='project_items'>
          <div className="project_item-image">
            <img src={imgt} alt="" className='exp_img'/>
          </div>
          <h3>This website</h3>
          <a href='https://github.com/sarvesh-pathak/WebSite-Portfolio' className='btn' target="_blank">GITHUB</a>
        </article>

        <article className='project_items'>
          <div className="project_item-image">
            <img src={imgt1} alt="" className='exp_img'/>
          </div>
          <h3>Credit Card Fraud Detection</h3>
          <a href='https://github.com/sarvesh-pathak/Fraud_Detection' className='btn' target="_blank">GITHUB</a>
        </article>

        <article className='project_items'>
          <div className="project_item-image">
            <img src={imgt2} alt="" className='exp_img'/>
          </div>
          <h3>Inventory Management System</h3>
          <a href='https://github.com/sarvesh-pathak/Inventory_Management' className='btn' target="_blank">GITHUB</a>
        </article>

      </div>
    </section>
  )
}

export default Experience