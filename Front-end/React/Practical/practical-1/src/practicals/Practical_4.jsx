import React from 'react'

function Practical_4({ name, age, location }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      width: "250px",
      borderRadius: "8px"
    }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default Practical_4;
