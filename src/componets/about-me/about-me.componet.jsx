import "./about-me.styles.scss"
import { Element } from "react-scroll";
import React from 'react';
import SnakeGame from "../python/python.componet";

function AboutMe(){
    return (
        <Element name="AboutMe" id="AboutMe">
            <div className="element">
                <SnakeGame></SnakeGame>
            </div>
        </Element>
    )
}


export default AboutMe;