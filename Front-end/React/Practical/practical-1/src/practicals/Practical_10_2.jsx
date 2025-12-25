import {useState,useRef} from 'react'

function Practical_10_2() {
 const [count, setCount] = useState(0);
  const renderCount = useRef(0); 

  renderCount.current += 1;

  return (
    <div>
      <h2>Count: {count}</h2>
      <h4>Component rendered: {renderCount.current} times</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Practical_10_2