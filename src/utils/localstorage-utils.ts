import {AppStateType} from "../bll/store";

export const loadState = () => {
    try {
        const persistedAppState = localStorage.getItem("appState")
        if (persistedAppState === null) {
            return undefined;
        }
        return JSON.parse(persistedAppState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppStateType) => {
    try {
        localStorage.setItem('appState', JSON.stringify(state));
        // @ts-ignore
        //localStorage.setItem('value', JSON.stringify(store.getState().counter.value));
    } catch {
        // ignore write errors
    }
};