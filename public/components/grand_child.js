import {useContext} from "react"
import AppDispatch from "./context.js"

export default function GrandChildComponent() {
  const context = useContext(AppDispatch);
  return (
    <>
      <h1>GrandChildComponent</h1>
      <p>Count: {context.state.count}</p>
      <button onClick={() => context.dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => context.dispatch({type: 'increment'})}>+</button>
    </>
  );
}
