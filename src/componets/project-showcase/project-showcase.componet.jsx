
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
            offset: 200,
            

        });
    })
    return(
        
        <Element className="project-element" name="projectShowcase" id="projectShowcase">
            
        <div className="MainContainer">
            <h1>Projects</h1>
            
            <div className="projectDisplay">
            <div className="box2" data-aos="fade-left"></div>
            <div className="textboxRight" data-aos="fade-down"><h1>Kiwrious Python Sensor Library</h1><h2>An open-source Python library for programming with real-time sensor data.</h2><p>Input to programs created using Python typically happen using keyboard and mouse. The ability to incorporate real-time environmental data measured through sensors as input could open doors to new programming experiences.

With this in mind, we have developed a toolkit consisting of six plug-and-play Kiwrious USB sensors that measure various physical phenomena such as humidity, temperature, conductance, air quality, light and heart rate.</p><p>The goal of this project is to develop a python library that services all sensor communications to allow users to easily program with their data.

Basic functions that the library should handle include establishing stable sensor connectivity, decoding live sensor data and providing appropriate methods for working with this data.

Users can then use this sensor data in tasks like visualizations (e.g. Matplotlib), creating data models for investigations (e.g. sci-kit) or developing games that react to changes in the environment (e.g. pygame).
            <a href="https://github.com/uoa-compsci399-s2-2022/fellas_in_compsci_399">https://github.com/uoa-compsci399-s2-2022/fellas_in_compsci_399</a>
            </p></div>
            </div>
            <div className="projectDisplay">
            <div className="textboxRight" data-aos="fade-down"><h1>Ecommerce Website dummy</h1><p>
            This React Ecommerce Website is a project developed to explore and master the fundamentals of React.js, a popular JavaScript library for building user interfaces. Designed with a focus on simplicity, usability, and modern web development practices, this website provides a practical learning environment for understanding React's core concepts and features.
            The website is built with a responsive layout, ensuring seamless user experience across various devices, including desktops, tablets, and mobile phones.
            It offers a comprehensive product catalog, allowing users to browse through a diverse range of items, each with detailed descriptions, images, and pricing information.
            Users can add products to their shopping cart, review their selections, and proceed to checkout seamlessly. The shopping cart interface provides real-time updates on item quantities and total prices.
            
            To enhance security and provide personalized experiences, the website includes user authentication functionality. Users can create accounts, log in securely, and manage their profiles and order history.
            This React Ecommerce Website serves as a hands-on learning project for mastering React.js concepts while building a real-world application. By actively engaging in the development process and exploring additional features and optimizations, developers can deepen their understanding of React and frontend web development principles.


            <a href="https://redditentente.github.io/Commerce-website/">https://redditentente.github.io/Commerce-website/</a>
            </p>
            
            </div>
            <div className="box" data-aos="fade-right"></div>
            
            </div>
            <div className="projectDisplay">
            <div className="box1" data-aos="fade-left" ></div>
            <div className="textboxRight" data-aos="fade-down"><h1>Regex to DFA converter.</h1><p>The Regex to DFA Converter is a Python tool designed to transform regular expressions into deterministic finite automata (DFA). Regular expressions are powerful for pattern matching, but their implementation can be complex. This converter simplifies the process by generating equivalent DFAs, which are easier to understand and execute efficiently.
            The converter parses a wide range of regular expressions, including symbols, concatenation, alternation, and the Kleene star operator. It constructs a deterministic finite automaton from the parsed regular expression, ensuring that the resulting DFA accepts the same language as the original regex.
            Implemented in Python, the converter is portable and can be easily integrated into existing Python projects or used as a standalone tool.
            <a href="https://github.com/RedditEntente/Regex-to-DFA">https://github.com/RedditEntente/Regex-to-DFA</a>

            </p>

            
            </div>
            </div>
            
            


        </div>
        </Element>
    )

}
    
export default ProjectShowcase;
