import ChiledComponent from './child.js'
import { useReducer } from "react"
import { reducer, initialState }  from "./reducer.js"
import {increment,decrement} from "./actions.js"
import {ContextAppDispatch, ContextState} from "./context.js"

export default function ParentComponent() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ContextAppDispatch.Provider value={dispatch}>
      <ContextState.Provider value={state}>
        <h1>ParentComponent</h1>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <ChiledComponent />
      </ContextState.Provider>
    </ContextAppDispatch.Provider>
  )
}
