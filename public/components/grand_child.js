import {useState} from "react"

export default function GrandChildComponent() {
  const [count, setCount] = useState(0);
  return (
    <>
    <h1>GrandChildComponent</h1>
    <p>count : {count}</p>
    </>
  );
}
