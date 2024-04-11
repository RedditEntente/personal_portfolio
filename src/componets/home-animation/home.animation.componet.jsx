
import { Element } from "react-scroll";
import { useEffect, useState } from 'react'
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters.componet";
import PinkLogoTitle from '../../assets/images/logoSpink.png'
import LogoTitle from '../../assets/images/logoS.png'
import Logo from "./logo/logo.componet";

function HomeAnimation(){
  const [letterClass, setLetterClass] = useState('text-animate')
  const name = "am"
  const job = "Software developer"
  const nameArray = name.split("")
  const jobArray = job.split("")

  const [src, setSrc] = useState(LogoTitle);

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(idTimeOut);
  }, [])
    
  const handleMouseEnter = () => {
    console.log('Mouse entered');
    console.log('PinkLogoTitle:', PinkLogoTitle);
    setSrc(PinkLogoTitle);
    console.log('src:', src);
  };

  const handleMouseLeave = () => {
        setSrc(LogoTitle);
  }
    

  return (
    <Element  name="HomeAnimation" id="HomeAnimation">
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>e</span>
            <span className={`${letterClass} _13`}>l</span>
            <span className={`${letterClass} _14`}>l</span>
            <span className={`${letterClass} _15`}>o</span>
            <br />
            <span className={`${letterClass} _16`}>I</span>
            <span className={`${letterClass} _17`}>'m</span>
            <img
              src={src}
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave} 
              alt="S"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={17}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={12}
            />
          </h1>
          <h2>Full-Stack Developer</h2>
        </div>
        <Logo />
      </div>
    </Element>
  );
}

export default HomeAnimation;
