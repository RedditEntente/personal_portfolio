import Nav from "../componets/navigation-bar/navigation-bar.componet"
import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import ProjectShowcase from "../componets/project-showcase/project-showcase.componet";
import AboutMe from "../componets/about-me/about-me.componet";
import Contact from "../componets/contact/contact.componet";
import "./home.styles.scss"
function Home(){
    return (
        <div>
            <Nav></Nav>

            <AboutMe className="element"></AboutMe>


            <ProjectShowcase className="element"></ProjectShowcase>


            <Contact className="element"></Contact>




        </div>
    )
}


export default Home