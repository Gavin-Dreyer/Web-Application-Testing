import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard'


export const addBalls = value => {
  if(value === 3) {
    return value - 3
  } else {
    return value + 1
  }
}

export const addStrikes = value => {
  if(value === 2){
    return value - 2
  } else {
    return value + 1
  }
}

export const foulBall = value => {
  if(value === 2){
    return 2
  } else {
    return value + 1
  }
}

export const reset = value => {
  return value = 0
}

function App(props) {
  const [balls, setBalls] = useState(0)
  const [strikes, setStrikes] = useState(0)

  console.log(balls)

  // const addBalls = () => {
  //   if(balls === 3) {
  //     setBalls(0)
  //   } else {
  //     setBalls(balls + 1)
  //   }
  // }

  // const addStrikes = () => {
  //   if(strikes === 2){
  //     setStrikes(0)
  //   } else {
  //     setStrikes(strikes + 1)
  //   }
  // }

  // const reset = () => {
  //   setBalls(0)
  //   setStrikes(0)
  // }

  // const foulBall = () => {
  //   if(strikes === 2){
  //     return
  //   } else {
  //     setStrikes(strikes + 1)
  //   }
  // }

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes}/>
      <Dashboard addBalls={addBalls} addStrikes={addStrikes} setStrikes={setStrikes} setBalls={setBalls} balls={balls} strikes={strikes} foulBall={foulBall} reset={reset}/>
      
    </div>
  );
}

export default App;


// foulBall={foulBall} reset={reset} 