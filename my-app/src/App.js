import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard'

function App() {
  const [balls, setBalls] = useState(0)
  const [strikes, setStrikes] = useState(0)

  const addStrikes = () => {
    if(strikes === 2){
      setStrikes(0)
    } else {
      setStrikes(strikes + 1)
    }
  }

  const addBalls = () => {
    if(balls === 3) {
      setBalls(0)
    } else {
      setBalls(balls + 1)
    }
  }

  const reset = () => {
    setBalls(0)
    setStrikes(0)
  }

  const foulBall = () => {
    if(strikes === 2){
      return
    } else {
      setStrikes(strikes + 1)
    }
  }

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes}/>
      <Dashboard foulBall={foulBall} reset={reset} addBalls={addBalls} addStrikes={addStrikes}/>
    </div>
  );
}

export default App;
