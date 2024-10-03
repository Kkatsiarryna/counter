
import * as React from 'react';
import s from './Scoreboard.module.css'

type ScoreboardType ={
    counter: number
}

export const Scoreboard = ({counter} : ScoreboardType) => {
    return (
        <div className={s.scoreboardDiv}>
            <h1 className={counter < 5 ? '' : s.stop}>{counter}</h1>
        </div>
    )
}