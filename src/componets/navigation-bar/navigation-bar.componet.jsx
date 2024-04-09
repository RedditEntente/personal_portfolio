
import './navigation-bar.styles.scss'
import { useState } from 'react'
import React from 'react';
import { Link, Events, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  
} from '@fortawesome/free-solid-svg-icons'


function Nav(){


  React.useEffect(() => {
    Events.scrollEvent.register('begin');
    Events.scrollEvent.register('end');
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);


  return (
    <div className="nav-bar">
      
      <nav className='nav-icons'>
        <Link activeClass="active" to="HomeAnimation" spy={true} smooth={true} duration={500}
          >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </Link>
        <Link className = "about-link"activeClass="active" to="AboutMe" spy={true} smooth={true} duration={500}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </Link>
        <Link className = "portfolio-link"activeClass="active" to="projectShowcase" spy={true} smooth={true} duration={500}>
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </Link>
        <Link className = "contact-link"activeClass="active" to="Contact" spy={true} smooth={true} duration={500}>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </Link>
        
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/samuel-adams-b9b4a8249/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/RedditEntente"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        
      </ul>
      
    </div>
  )
}

export default Nav