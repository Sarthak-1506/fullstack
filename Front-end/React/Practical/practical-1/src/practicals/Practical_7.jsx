import React from 'react'

function Practical_7() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default Practical_7