import "./styles.css";
import { useEffect, useState } from "react";
//useState hook
export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  // first in const is variable
  // second is what we are setting it to
  useEffect(() => {
    console.log("value is " + count);
  }, [count]);
  return (
    <div className="App">
      <h1>Hello Nishant</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setCount(count + 1)}>click me {count}</button>
      <button onClick={() => setCount2(count2 + 1)}>click me2 {count2}</button>
    </div>
  );
}
