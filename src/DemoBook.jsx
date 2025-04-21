import './App.css'
import HTMLFlipBook from 'react-pageflip'
import { useState, useRef } from 'react';
import React from 'react';
import MoneyGifButton from './MoneyGifButton';

import journal1 from "/journal1.jpg";
import journal2 from "/journal2.jpg";
import journal3 from "/journal3.jpg";
import journal4 from "/journal4.jpg";
import journal5 from "/journal5.jpg";
import journal6 from "/journal6.jpg";
import journal7 from "/journal7.jpg";
import journal8 from "/journal8.jpg";
import journal9 from "/journal9.jpg";
import journal10 from "/journal10.jpg";
import journal11 from "/journal11.jpg";
import journal12 from "/journal12.jpg";
import journal13 from "/journal13.jpg";
import journal14 from "/journal14.jpg";
import journal15 from "/journal15.jpg";

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
          
          <Page number="1" image={journal1}>
            <MoneyGifButton/>
          </Page>

          <Page number="2" image={journal2}></Page>
          <Page number="3" image={journal3}></Page>
          <Page number="4" image={journal4}></Page>
          <Page number="5" image={journal5}></Page>
          <Page number="6" image={journal6}></Page>
          <Page number="7" image={journal7}></Page>
          <Page number="8" image={journal8}></Page>
          <Page number="9" image={journal9}></Page>
          <Page number="10" image={journal10}></Page>
          <Page number="11" image={journal11}></Page>
          <Page number="12" image={journal12}></Page>
          <Page number="13" image={journal13}></Page>
          <Page number="14" image={journal14}></Page>
          <Page number="15" image={journal15}></Page>

        </HTMLFlipBook>

        {/* <button onClick={() =>
                  console.log(book.current.pageFlip().getCurrentPageIndex())}>КУРРПАГЕ</button> */}
      </div>
    )
  }