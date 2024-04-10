
import "./project-showcase.styles.scss";
import { Element } from "react-scroll";
import React from 'react';
import {useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"




function ProjectShowcase() {
    useEffect(()=>{
        Aos.init({
            duration: 1000,
            easing:"ease-in-sine",
            once: false,
            offset: 350,
            

        });
    })
    return(
        <Element name="projectShowcase" id="projectShowcase">
        <div className="MainContainer">
            <div className="box" data-aos="fade-left"></div>
            <div className="box" data-aos="fade-right"></div>
            <div className="box" data-aos="fade-left"></div>
            <div className="box" data-aos="fade-right"></div>
            <div className="box" data-aos="fade-left"></div>
            <div className="box" data-aos="fade-right"></div>


        </div>
        </Element>
    )

}
    
export default ProjectShowcase;
