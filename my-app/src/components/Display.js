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
      </div>
    )
}

export default Display