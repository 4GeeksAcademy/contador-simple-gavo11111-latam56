
import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/index.css'
import {Home} from './components/Home';


let counter = 0

setInterval(() => {

  const digitSix = Math.floor(counter / 100000);
  const digitFive = Math.floor(counter / 10000);
  const digitFour = Math.floor(counter / 1000);
  const digitThree = Math.floor(counter / 100);
  const digitTwo = Math.floor(counter / 10);
  const digitOne= Math.floor(counter / 1);
  
  counter++;

  

  ReactDOM.render(
      <Home digitOne={digitOne} digitTwo={digitTwo} digitThree={digitThree} digitFour={digitFour} digitFive={digitFive} digitSix={digitSix}/>,
    document.getElementById('root')
  );
}, 1000);
