import React from 'react'
import './contact.css'
import{MdEmail} from "react-icons/md"
import{FaTelegram} from "react-icons/fa"
import{RiWhatsappFill} from "react-icons/ri"
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h3b9hxd', 'template_z1v2qsr', form.current, 'Lb-hH447BDEFy7zgM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Message Me</h2>

      <div className='container con__cont'>
        <div className='con__ops'>
          <article className='con__op'>
            <MdEmail className='con__op__icon'/>
            <h4>Email</h4>
            <h4>sarveshgeepathak@gmail.com</h4>
            <a href='mailto:sarveshgeepathak@gmail.com' target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className='con__op'>
            <FaTelegram className='con__op__icon'/>
            <h4>Telegram</h4>
            <h5>Sarvesh Pathak</h5>
            <a href='https://t.me/917807883034' target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className='con__op'>
            <RiWhatsappFill className='con__op__icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7807883034</h5>
            <a href='https://wa.me/917807883034' target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea type="message" rows="10" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact