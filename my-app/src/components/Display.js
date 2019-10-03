import React from 'react'

const Display = (props) => {
    return (
        <div className='score'>
        {props.balls} 
        <span> 
          Balls
        </span>
        {props.strikes}
        <span>
          Strikes
        </span>
        {props.outs}
        <span>
          Outs
        </span>
        {props.inning}
        <span>
          Inning
        </span>
      </div>
    )
}

export default Display