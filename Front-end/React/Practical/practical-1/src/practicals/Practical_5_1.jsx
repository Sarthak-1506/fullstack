import {useState} from 'react'

function Practical_5_1() {
 const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default Practical_5_1