import React from 'react'

function Practical_2() {
 
    const topic = "JSX";
  const description = "JSX allows us to write HTML-like syntax inside JavaScript and makes React components easier to read.";

  return (
    <div>
      <h1>Welcome to JSX</h1>
      <p>
        {topic} is a syntax extension for JavaScript. {description}
      </p>
    </div>
  );
}

export default Practical_2