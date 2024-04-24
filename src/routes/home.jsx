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
            <HomeAnimation className="home-page" ></HomeAnimation>
            
            <div class="custom-shape-divider-bottom-1713873886">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
            

            <div className="spacer layer2"><AboutMe className="about-element"></AboutMe></div>
            
            


            <ProjectShowcase className="project-element"></ProjectShowcase>
            
            <div className="spacer layer1"><Contact className="contactElement"></Contact></div>

            
            
            

            

        </div>
    )
}


export default Home