import { createContext } from 'react';
import { HomeStates } from './HomeStates';

export const ToolContext = createContext();

export const ToolProvider = ({ children }) => {
    let states = {
        home_state: HomeStates(),
    }

    return (
        <ToolContext.Provider value={{...states}}>
            {children}
        </ToolContext.Provider>
    )
}