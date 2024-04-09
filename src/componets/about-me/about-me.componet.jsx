import "./about-me.styles.scss"
import { Element } from "react-scroll";
import React from 'react';


function AboutMe(){
    return (
        <Element name="AboutMe" id="AboutMe">
            <div className="element">
                <h2>Me</h2>
                <p>Content for Section 1...</p>
            </div>
        </Element>
    )
}


export default AboutMe;