import React from 'react';
import { Link, Events, animateScroll as scroll } from 'react-scroll';
import ProjectShowcase from '../project-showcase/project-showcase.componet';

import './navigation-bar.styles.scss';
function Nav() {
  
  React.useEffect(() => {
    Events.scrollEvent.register('begin');
    Events.scrollEvent.register('end');
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

 
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <nav>
      <div className="social-links">
          <a href="https://github.com/RedditEntente" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/samuel-adams-b9b4a8249/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <ul>
          <li><Link activeClass="active" to="AboutMe" spy={true} smooth={true} duration={500}>About Me</Link></li>
          <li><Link activeClass="active" to="projectShowcase" spy={true} smooth={true} duration={500}>Projects</Link></li>
          <li><Link activeClass="active" to="Contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
          
        </ul>
      </nav>
    </div>
      
    
  );
}

export default Nav;
