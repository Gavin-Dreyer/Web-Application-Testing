import React from 'react'

const Dashboard = props => {
    return(
        <div className='buttons'>
            <button onClick={() => {props.setStrikes(props.reset(props.strikes)); props.setBalls(props.reset(props.balls))}}>
            Hit
            </button>
            <button onClick={() => props.setStrikes(props.addStrikes(props.strikes))}>
            Strike
            </button>
            <button onClick={() => {props.setStrikes(props.foulBall(props.strikes))}}>
            Foul
            </button>
            <button onClick={() => props.setBalls(props.addBalls(props.balls))}>
            Ball
            </button>
        </div>
    )
}

export default Dashboard