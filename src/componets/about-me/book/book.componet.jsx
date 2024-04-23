import React from 'react';
import './book.styles.scss'; 
import pythonIcon from './../../../assets/images/pngwing.com.png'
import jsIcon from "./../../../assets/images/javascript-js.svg"
import htmlIcon from "./../../../assets/images/html-5.svg"
import HTMLFlipBook from 'react-pageflip';
import reactIcon from "./../../../assets/images/react.svg"
import SnakeGame from '../../python/python.componet';
import cssIcon from "./../../../assets/images/css3-original-wordmark.svg"
import penguinCover from "./../../../assets/images/skills(4).svg"
import javaIcon from "./../../../assets/images/icons8-java(1).svg"
function MyBook(props) {
    return (
        <HTMLFlipBook className='book' width={500} height={700} flippingTime={2000} showCover={true} maxShadowOpacity={0}>
            <div className="cover">
            <img src={penguinCover} alt='S' />
            </div>
                
            <div className="lined-paper"
                
              ><img className="pythonImg"src={pythonIcon} alt='S'></img><img className="pythonImg"src={javaIcon} alt='S'></img>
              <p className='pbook'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p></
              div>
            <div className="lined-paper"></div>


            <div className="ImgPageContainer"><h1>Frontend Development</h1><img className='jsImg' src={jsIcon} alt='S'></img><img className='jsImg' src={htmlIcon} alt='S'></img><img className='jsImg' src={reactIcon} alt='S'></img><img  className='jsImg' src={cssIcon} alt='S'></img>
            <p className='pbook'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p></div>


            <div className="lined-paper"><SnakeGame></SnakeGame></div>


            <div class="lined-paper">


            
            </div>
            <div class="lined-paper">
            
            </div>
            
            <div className="back"></div>
            
        </HTMLFlipBook>
    );
}

export default MyBook;