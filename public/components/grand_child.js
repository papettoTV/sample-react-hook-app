import {useContext, useEffect} from "react"
import AppDispatch from "./context.js"

export default function GrandChildComponent() {
  const context = useContext(AppDispatch);
  useEffect(() => {
    console.log("GrandChildComponent useEffect");
    // Update the document title using the browser API
    document.title = `You clicked ${context.state.count} times`;
    return function cleanup() {
      console.log("cleanup");
    };
  });
  return (
    <>
      <h1>GrandChildComponent</h1>
      <p>Count: {context.state.count}</p>
      <button onClick={() => context.dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => context.dispatch({type: 'increment'})}>+</button>
    </>
  );
}
