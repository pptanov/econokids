import './App.css'
import addConfetti from './confettyEffect'
import { useState, useRef } from 'react';
import AnimationPage from './AnimationPage';


export default function MoneyGifButton () {
  const [html, setHtml] = useState(null);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const buttonRef = useRef(null);
  
  function deleteButton () {
    // buttonRef.current.remove();
    const parent = document.getElementById('123');
    const child = document.getElementById('321');
    parent.removeChild(child);
  }

  function renderHtml() {
    addConfetti();

    setIsAlertVisible(true);

    return (
      <>
        <AnimationPage/>
      </>
    );
  }


  return (
    <div>
      {isAlertVisible && html}

      <div id ='123'>
        <button
          ref = {buttonRef}
          id = '321'
          className="btn-call"
          onClick={() => {
            setHtml(renderHtml());
            deleteButton();
          }}
        >
        </button>
      </div>
    </div>
  )
}
