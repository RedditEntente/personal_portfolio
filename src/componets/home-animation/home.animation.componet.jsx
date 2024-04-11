
import { Element } from "react-scroll";
import { useEffect, useState } from 'react'


import LogoTitle from '../../assets/images/logo-s.png'
import Logo from "./logo/logo.componet";

function HomeAnimation(){
    
      

  
    return (
        <Element  name="HomeAnimation" id="HomeAnimation">
            <div className="home-page">
        <div className="text-zone">
          <h1>
                Hello
            <br />
            I'm
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            am
            <br />
           Software developer
          </h1>
          <h2>Full-stack Developer / </h2>
          
        </div>
        <Logo />
      </div>

        </Element>
    )
    
}


export default HomeAnimation;