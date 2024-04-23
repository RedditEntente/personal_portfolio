import "./about-me.styles.scss"
import React from 'react';
import Book from "./book/book.componet";
import { Element } from "react-scroll";
import {useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"


function AboutMe(){
  useEffect(()=>{
    Aos.init({
        duration: 1000,
        easing:"ease-in-sine",
        once: false,
        offset: 200,
        

    });
})
  return (
    <Element name="AboutMe" id="AboutMe">
    <div>
        <div className="AboutMeClass">
          <div className="profilePhoto"></div>
          <div className="AboutMeText"><p> A passionate programmer with a deep-rooted enthusiasm for crafting elegant solutions to complex problems. I hold a Bachelor's degree in Computer Science from the esteemed University of Auckland, where I honed my skills and cultivated my love for technology.

My journey in the world of programming began with a curiosity that turned into a lifelong passion. From the early days of tinkering with code to the rigorous academic challenges at university, I've embraced every opportunity to expand my knowledge and refine my craft.

During my time at the University of Auckland, I immersed myself in a diverse range of computer science topics, from algorithms and data structures to software engineering and artificial intelligence. I thrived in environment's that encourage innovation and collaboration, leveraging my education to tackle real-world problems and push the boundaries of what's possible in technology.

Outside of the classroom, I've embarked on numerous projects and initiatives that reflect my dedication to the field. Whether it's developing sleek web applications, exploring the intricacies of machine learning, or contributing to open-source projects, I'm always eager to explore new technologies and challenge myself to grow as a programmer.

Beyond the lines of code, I'm driven by a passion for continuous learning and a desire to make a meaningful impact in the tech community. I believe that technology has the power to shape our world for the better, and I'm committed to leveraging my skills to drive positive change and innovation.

As I continue on my journey as a passionate programmer, I'm excited to embrace new challenges, learn from every experience, and contribute to the ever-evolving landscape of technology.</p>
</div>  
        </div>

        
      <div className="book-container">
      
      <Book data-aos="fade-down"></Book>
      
      </div>
      
      
    </div>
    </Element>
  );
}

export default AboutMe;
