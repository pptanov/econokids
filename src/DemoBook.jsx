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
          width={523} height={740} autoSize={true}
          size="stretch" minWidth={523} maxWidth={523} minHeight={740} maxHeight={740} 
          usePortrait={false} drawShadow={false} showCover={true}
          ref = {book}
        >
          
          <Page number="1" image="/src/assets/journal1.jpg">
            <MoneyGifButton/>
          </Page>

          <Page number="2" image="/src/assets/journal2.jpg"></Page>
          <Page number="3" image="/src/assets/journal3.jpg"></Page>
          <Page number="4" image="/src/assets/journal4.jpg"></Page>
          <Page number="5" image="/src/assets/journal5.jpg"></Page>
          <Page number="6" image="/src/assets/journal6.jpg"></Page>
          <Page number="7" image="/src/assets/journal7.jpg"></Page>
          <Page number="8" image="/src/assets/journal8.jpg"></Page>
          <Page number="9" image="/src/assets/journal9.jpg"></Page>
          <Page number="10" image="/src/assets/journal10.jpg"></Page>
          <Page number="11" image="/src/assets/journal11.jpg"></Page>
          <Page number="12" image="/src/assets/journal12.jpg"></Page>
          <Page number="13" image="/src/assets/journal13.jpg"></Page>
          <Page number="14" image="/src/assets/journal14.jpg"></Page>
          <Page number="15" image="/src/assets/journal15.jpg"></Page>

        </HTMLFlipBook>

        {/* <button onClick={() =>
                  console.log(book.current.pageFlip().getCurrentPageIndex())}>КУРРПАГЕ</button> */}
      </div>
    )
  }