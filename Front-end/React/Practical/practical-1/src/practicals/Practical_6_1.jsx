import React from 'react'

function Practical_6_1({age}) {
  return (
    <div>
      {age >= 18 ? (
        <p>You are eligible to vote.</p>
      ) : (
        <p>You are not eligible to vote.</p>
      )}
    </div>
  );
}

export default Practical_6_1