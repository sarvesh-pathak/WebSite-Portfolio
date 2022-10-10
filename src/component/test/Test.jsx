import React from 'react'
import './test.css'
import {GiAchievement} from "react-icons/gi"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
export default class Test extends React.Component{
  render(){
    const settings={
      dots:true,
      infinite:true,
      speed:500,
      slidesToShow:1,
      slidesToScroll:1,
    };
  return (
    <section id='test'>
      <h5>Keeping Up with Sarvesh Pathak</h5>
        

        <Slider {...settings}
               className=' test__content'>
          <div className='test__card'>
            <div className='pppp'>
          <article className='Details1'>
              <GiAchievement className='Icons'/>
              <h4 >I Got Certifed by IBM</h4>
              <small className='text-ligth'>August</small></article>
              </div>
            </div>

            <div className='test__card'>
            <div className='pppp'>
          <article className='Details1'>
              <GiAchievement className='Icons'/>
              <h4>I Learnt Cuda By Nvidia </h4>
              <small className='text-ligth'>June</small></article>
              </div>
            </div>

            <div className='test__card'>
            <div className='pppp'>
          <article className='Details1'>
              <GiAchievement className='Icons'/>
              <h4>First Time Solving All Question In A Competition</h4>
              <small className='text-ligth'>April</small></article>
              </div>
            </div>
            <div className='test__card'>
            <div className='pppp'>
          <article className='Details1'>
              <GiAchievement className='Icons'/>
              <h4>First Time Getting 100% In LeetCode</h4>
              <small className='text-ligth'>July</small></article>
              </div>
            </div>
            <div className='test__card'>
            <div className='pppp'>
          <article className='Details1'>
              <GiAchievement className='Icons'/>
              <h4>Made This Website </h4>
              <small className='text-ligth'>August</small></article>
              </div>
            </div>
            <div className='test__card'>
            <div className='pppp'>
          <article className='Details1'>
              <GiAchievement className='Icons'/>
              <h4>Got placed under top 100 globally in Meta Global Hackathon.
                     and top 50 in Asia Pacific Region.
              </h4>
              <small className='text-ligth'>28-09-2022</small></article>
              </div>
            </div>
            <div className='test__card'>
            <div className='pppp'>
          <article className='Details1'>
              <GiAchievement className='Icons'/>
              <h4>Got Nvidia Fundamentals of Deep Learning Certificate</h4>
              <small className='text-ligth'>03-10-2022</small></article>
              </div>
            </div>
            <div className='test__card'>
            <div className='pppp'>
          <article className='Details1'>
              <GiAchievement className='Icons'/>
              <h4>Working On Getting Internship</h4>
              <small className='text-ligth'>........</small></article>
              </div>
            </div>
            </Slider>
    </section>
  )
}
}
