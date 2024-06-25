// import React,{createContext , useContext , useReducer} from 'react';

// export const StateContext = createContext();

// export const StateProvider = ({reducer,initialState,children}) => (

//     <StateProvider.Provider value={useReducer(reducer,initialState)}>
//         {children}
//     </StateProvider.Provider>
// );

// export const useStateValue = () => useContext(StateContext)

import React, { createContext, useContext, useReducer } from "react";

// Create a context for your state
export const StateContext = createContext();

// Create a StateProvider component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Create a custom hook to access the state
export const useStateValue = () => useContext(StateContext);
