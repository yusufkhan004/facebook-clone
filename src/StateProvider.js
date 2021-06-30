// importing context api stuff i.e. useContext useReducer
import React, { createContext, useContext, useReducer } from 'react'

// preparing data layer
export const StateContext = createContext();

// it is essentially called high order component and it 
// is used to wrap our app, it allow us to have state
// provider to wrap the app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>    
)

// to pull smthng from the data layer we use 'useStateValue' hook
export const useStateValue = () => useContext(StateContext);

