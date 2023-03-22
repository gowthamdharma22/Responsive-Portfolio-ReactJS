import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import ContactGif from "./contact.json"
import Fade from "react-reveal/Fade"
import Lottie from 'lottie-react'
import { toast, Toaster } from 'react-hot-toast';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
      emailjs.sendForm('service_88gs2tw', 'template_oyl706p', form.current, 'tEjukKSoKzRFAbne1')
      e.target.reset()
      toast.success('Message Sent',{
        style:{
          backgroundColor:"#ebebeb",
          padding:"18px",
          fontSize:"15px"
        }
      })
  };

  return (
    <section className="contact" id="contact">
      <div>
          <Toaster
            position="top-right"
            reverseOrder={false}
          />
      </div>
      <Fade>
        <div className="section_top">
          <h2 className="section_title">Get in Touch</h2>
          <span className="section_sub">Contact me</span>
        </div>
      </Fade>
      <div className="contact_cont">
        <Fade left className="contact_cont">
            <Lottie animationData={ContactGif} className="left_gif"/>
        </Fade>
        <div className="contact_container container grid">
            <Fade right>
            <div className="contact_contnt">
              <form ref={form} onSubmit={sendEmail} className="contact_form">
                <div className="contact_form_div">
                  <label  className="contact_label">Name</label>
                  <input type="text" name="name" className='contact_input' placeholder='Your name' required />
                </div>
                <div className="contact_form_div">
                  <label  className="contact_label">Email</label>
                  <input type="email" name="email" className='contact_input' placeholder='Your email' required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                </div>
                <div className="contact_form_div">
                  <label  className="contact_label">Message</label>
                  <textarea name="message" cols="30" rows="10" className='contact_input area' placeholder='Write message here...' required></textarea>
                </div>
                <button className="button-56" type="submit">Send</button>
              </form>
              </div>
            </Fade>
        </div>
        <div className="main"></div>
      </div>
    </section>
  )
}

export default Contact
