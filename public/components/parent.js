import ChiledComponent from './child.js'
import { useReducer } from "react"
import AppDispatch from "./context.js"

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default function ParentComponent() {
  const [state, dispatch] = useReducer(reducer, {count:0});
  return (
    <AppDispatch.Provider value={{state:state,dispatch:dispatch}}>
      <h1>ParentComponent</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <ChiledComponent />
    </AppDispatch.Provider>
  )
}
