import Nav from "../componets/navigation-bar/navigation-bar.componet"
import React from 'react';

import ProjectShowcase from "../componets/project-showcase/project-showcase.componet";
import AboutMe from "../componets/about-me/about-me.componet";
import Contact from "../componets/contact/contact.componet";
import HomeAnimation from "../componets/home-animation/home.animation.componet";
import "./home.styles.scss"
function Home(){
    return (
        <div className="home-color">
            <Nav></Nav>
            <HomeAnimation className="centeredElement"></HomeAnimation>
            <div className="padding"></div>

            <AboutMe className="element"></AboutMe>


            <ProjectShowcase className="element1"></ProjectShowcase>


            <Contact className="centeredElement"></Contact>
            <div className="padding"></div>
            <div className="padding"></div>
            

            

        </div>
    )
}


export default Home