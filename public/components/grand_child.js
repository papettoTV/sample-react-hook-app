import {useContext, useEffect} from "react"
import {ContextAppDispatch,ContextState} from "./context.js"
import {increment,decrement} from "./actions.js"

export default function GrandChildComponent() {
  const dispatch = useContext(ContextAppDispatch);
  const state = useContext(ContextState);
  useEffect(() => {
    console.log("GrandChildComponent useEffect");
    // Update the document title using the browser API
    document.title = `You clicked ${state.count} times`;
    return function cleanup() {
      console.log("cleanup");
    };
  });
  return (
    <>
      <h1>GrandChildComponent</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}
