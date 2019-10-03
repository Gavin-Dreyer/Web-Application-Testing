import React from 'react'

const Dashboard = props => {
    return(
        <div className='buttons'>
            <button onClick={props.reset}>
            Hit
            </button>
            <button onClick={props.addStrikes}>
            Strike
            </button>
            <button onClick={props.foulBall}>
            Foul
            </button>
            <button onClick={props.addBalls}>
            Ball
            </button>
        </div>
    )
}

export default Dashboard