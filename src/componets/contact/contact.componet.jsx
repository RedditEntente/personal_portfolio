import "./contact.styles.scss"
import { Element } from "react-scroll";
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'

import React from 'react';

import Button1 from "../button/button.componet";


function Contact(){
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    
  
    
  
    




    return (
        <Element name="Contact" id="Contact">
            
      <div className="contactElement">
        <div className="text-zone">
          <h1>
            Contact Me
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} >
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