import { useReducer } from 'react'

const useSetState = (initialState: any) => {
  const [state, setState] = useReducer((currentState: any, newState: any) => {
    return { ...currentState, ...newState }
  }, initialState)
  return [state, setState]
}

export default useSetState
