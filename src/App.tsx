import React, {useEffect, useState} from 'react';

import './App.css';
import {Counter} from "./components/Counter";
import { useSelector} from "react-redux";
import {AppStateType, useAppDispatch} from "./bll/store";
import {incCounterValueAC} from "./bll/counter-reducer";
//import {incValueTC,setValueFromLocalStorageTC} from "./bll/counter-reducer";

function App() {
    const value  = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useAppDispatch();


    //-------------EXAMPLE 3
    const incHandler = () => {
        dispatch(incCounterValueAC())
    }


    //-------------EXAMPLE 2
    // useEffect(() => {
    //     dispatch(setValueFromLocalStorageTC())
    // }, []);

    // const incHandler = () => {
    //     dispatch(incValueTC())
    // }


    //---------------EXAMPLE 1

    // const [value, setValue] = useState<number>(0)
    //
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem("counterValue");
    //     if (valueAsString){
    //         let newValue = JSON.parse(valueAsString);
    //         setValue(newValue);
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     localStorage.setItem('counterValue', JSON.stringify(value));
    // }, [value]);
    //
    // const incHandler = () => {
    //     setValue(value+1);
    // }

  return (
    <div className="App">
        {/*<Counter/>*/}
        <h1>{value}</h1>
        <button onClick={incHandler}>inc</button>
    </div>

  );
}

export default App;
