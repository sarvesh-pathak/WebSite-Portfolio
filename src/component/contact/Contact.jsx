import React from 'react'
import './contact.css'
import{MdEmail} from "react-icons/md"
import{FaTelegram} from "react-icons/fa"
import{RiWhatsappFill} from "react-icons/ri"
const Contact = () => {
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
            <a href='https://t.me/917807883034 ' target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className='con__op'>
            <RiWhatsappFill className='con__op__icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7807883034</h5>
            <a href='https://api.whatsapp.com/send?phone=+917807883034 target="_blank"'>Send a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact