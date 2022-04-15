import React, { useReducer } from 'react';
import Context from './Context';
import { reducer, initialState } from './init';

interface IProps {
  children: any;
}

const Provider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

export default Provider;
 