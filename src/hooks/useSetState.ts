import { useReducer } from 'react';

export default (initialState: any) => {
  const [state, setState] = useReducer((currentState: any, newState: any) => {
    return { ...currentState, ...newState };
  }, initialState);
  return [state, setState];
};
