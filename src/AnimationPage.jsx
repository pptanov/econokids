import './App.css'
import React from 'react';
import gifMoney from '/src/assets/coins.json'
import Lottie from 'react-lottie';


export default class AnimationPage extends React.Component {
  render() {
      const defaultOptions = {
          loop: false,
          autoplay: true,
          animationData: gifMoney,
          renderer: 'svg'
      }
      return (
          <div className='gifMoney'>
              <Lottie
                options={defaultOptions}
                height={200}
                width={200}
              />
          </div>
      )
  };  
}
