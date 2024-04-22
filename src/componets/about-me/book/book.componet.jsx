import React, { useState } from 'react';
import './book.styles.scss'; 

import HTMLFlipBook from 'react-pageflip';

function MyBook(props) {
    return (
        <HTMLFlipBook className='book' width={500} height={600} flippingTime={2000} >
            <div className="blank"></div>
            <div className="cover"><h1 className='Title'>Skills</h1></div>
            <div className="demoPage"><h1>Python</h1></div>
            <div className="demoPage">Page 4</div>
            <div className="demoPage">Page 5</div>
            <div className="demoPage">Page 6</div>
            <div className="back"></div>
            <div className="blank"></div>
        </HTMLFlipBook>
    );
}

export default MyBook;