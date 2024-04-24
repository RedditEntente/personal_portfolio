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
        <HTMLFlipBook className='book' width={500} height={700} flippingTime={2000} showCover={true} maxShadowOpacity={0} >
            <div className="cover">
            <img src={penguinCover} alt='S' />
            </div>
                
            <div className="lined-paper"
                
              >
                <div className='programing-languages-container'><img className="pythonImg" src={pythonIcon} alt='S'></img><img className="pythonImg"src={javaIcon} alt='S'></img></div>
              <p className='pbook'>

I possess strong proficiency in both Python and Java. With Python, I excel in leveraging its simplicity and versatility to develop efficient and elegant solutions to complex problems. My experience encompasses a wide range of Python libraries and frameworks, allowing me to work adeptly in areas such as web development, data analysis, machine learning, 
and automation. In Java, I demonstrate a deep understanding of object-oriented programming principles and design patterns. My ability to write clean, maintainable code and my dedication to staying updated with the latest advancements in both languages make me a valuable asset to any development team.
            </p></
              div>
            <div className="lined-paper"><SnakeGame></SnakeGame></div>


            <div className="ImgPageContainer"><h1>Frontend Development</h1><img className='jsImg' src={jsIcon} alt='S'></img><img className='jsImg' src={htmlIcon} alt='S'></img><img className='jsImg' src={reactIcon} alt='S'></img><img  className='jsImg' src={cssIcon} alt='S'></img>
            <p className='pbook'>
            </p></div>


            <div className="lined-paper"></div>


            <div class="lined-paper">


            
            </div>
            <div class="lined-paper">
            
            </div>
            
            <div className="back"></div>
            
        </HTMLFlipBook>
    );
}

export default MyBook;