import {useState} from 'react'

function Practical_5() {
  const [text, setText] = useState("Not Clicked");

  const handleClick = () => {
    setText("Clicked!");
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default Practical_5