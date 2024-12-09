import './App.css'
import HTMLFlipBook from 'react-pageflip'
import { useState, useRef } from 'react';
import React from 'react';
import MoneyGifButton from './MoneyGifButton';

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      {/* <h1></h1> */}
      <img src={props.image}></img>
      <div className='div-hovered'>{props.children}</div>
    </div>
  );
});

export default function DemoBook (props) {
  const book = useRef();
    return (
      <div className='divFlipBook'>
        
        <HTMLFlipBook className='flipBook'
          width={593} height={842} autoSize={false}
          size="stretch" minWidth={593} maxWidth={593} minHeight={842} maxHeight={842} 
          usePortrait={false} drawShadow={false} showCover={true}
          ref = {book}
        >
          
          <Page number="1" image="/src/assets/journal1.png">
            <MoneyGifButton/>
          </Page>

          <Page number="2" image="/src/assets/journal2_1.png"></Page>
          <Page number="3" image="/src/assets/journal2_2.png"></Page>
          <Page number="4" image="/src/assets/journal3.png"></Page>

        </HTMLFlipBook>

        {/* <button onClick={() =>
                  console.log(book.current.pageFlip().getCurrentPageIndex())}>КУРРПАГЕ</button> */}
      </div>
    )
  }