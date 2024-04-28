import "./contact.styles.scss"
import { Element } from "react-scroll";
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'

import React from 'react';

import Button1 from "../button/button.componet";


function Contact(){
    
    const form = useRef()
    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs
        .sendForm('service_xsmlczr', 'template_ahtou88', form.current, 'eTS2q6IUZPBW4nEG5')
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload(false)
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
    }
  
    
  
    




    return (
        <Element name="Contact" id="Contact">
            
      <div className="contactElement">
        <div className="text-zone">
          <h1>
            Contact Me
          </h1>
          
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li className="centeredButton">
                  <Button1 type="submit" value="SEND" >Submit</Button1>
                </li>

              </ul>
            </form>
          </div>
        </div>
        
        
      </div>
      
    
        </Element>
        
    )
}


export default Contact