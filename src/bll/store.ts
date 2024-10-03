import {applyMiddleware, combineReducers, legacy_createStore, UnknownAction} from "redux";
import {counterReducer} from "./counter-reducer";
import {thunk, ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {loadState, saveState} from "../utils/localstorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})

let preloadedState = loadState();

//export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export const store = legacy_createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export type AppDispatchType = ThunkDispatch<AppStateType, unknown, UnknownAction> //типизация для dispatch
export const useAppDispatch = () => useDispatch<AppDispatchType>()


store.subscribe( () => {
    saveState({
        counter: store.getState().counter
    })
})

export type AppStateType = ReturnType <typeof rootReducer>;
type AppStoreType = typeof store;