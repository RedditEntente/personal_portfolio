import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './navigation_bar.styles.scss';

function App() {
  
  React.useEffect(() => {
    Events.scrollEvent.register('begin');
    Events.scrollEvent.register('end');
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  // Function to scroll to the top programmatically
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <nav>
      <div className="social-links">
          <a href="https://github.com/RedditEntente" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkeyourusernamedin.com/in/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <ul>
          <li><Link activeClass="active" to="section1" spy={true} smooth={true} duration={500}>Section 1</Link></li>
          <li><Link activeClass="active" to="section2" spy={true} smooth={true} duration={500}>Section 2</Link></li>
          <li><Link activeClass="active" to="section3" spy={true} smooth={true} duration={500}>Section 3</Link></li>
          
        </ul>
      </nav>
      <Element name="section1" className="element">
        <h2>Section 1</h2>
        <p>Content for Section 1...</p>
      </Element>
      <Element name="section2" className="element">
        <h2>Section 2</h2>
        <p>Content for Section 2...</p>
      </Element>
      <Element name="section3" className="element">
        <h2>Section 3</h2>
        <p>Content for Section 3...</p>
      </Element>
    </div>
  );
}

export default App;
