import * as React from 'react';
import s from './Counter.module.css'
import {Scoreboard} from "./Scoreboard";
import {Button} from "./Button";
import s2 from './Button.module.css'
import {useState} from "react";

export const Counter = () => {
        const [count, setCount] = useState(0);
        let max = 5

        const inc = () => {
            setCount(count + 1);
        };

        const reset = () => {
            setCount(0);
        };

        return (
            <div className={s.mainDiv}>
                <Scoreboard counter={count}/>
                <div className={s.scoreboardButtonDiv}>
                    <Button title={'inc'}
                            className={ count < max ? s2.button : s2.buttonInactive}
                            onClick={inc}
                            disabled={count === max}/>
                    <Button title={'reset'}
                            className={count < max ? s2.buttonInactive : s2.button}
                            onClick={reset}
                            disabled={count < max}/>
                </div>
            </div>
        )
    }

