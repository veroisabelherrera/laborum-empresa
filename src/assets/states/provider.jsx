import React, { useReducer, useContext } from 'react';
import InitialStateProfile from './initialStateProfile';
import Reducer from './reducer';

const MyContext = React.createContext();

export const ProviderContext = (props) => {
  const contextState = useReducer(Reducer, InitialStateProfile);
  return (
    <MyContext.Provider value={contextState}>
      {props.children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const myContext = useContext(MyContext);
  return myContext;
};
