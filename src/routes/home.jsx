import Nav from "../componets/navigation-bar/navigation-bar.componet"
import React from 'react';

import ProjectShowcase from "../componets/project-showcase/project-showcase.componet";
import AboutMe from "../componets/about-me/about-me.componet";
import Contact from "../componets/contact/contact.componet";
import HomeAnimation from "../componets/home-animation/home.animation.componet";
import "./home.styles.scss"
function Home(){
    return (
        <div>
            <Nav></Nav>
            <HomeAnimation className="element"></HomeAnimation>

            <AboutMe className="element"></AboutMe>


            <ProjectShowcase className="element"></ProjectShowcase>


            <Contact className="element"></Contact>




        </div>
    )
}


export default Home