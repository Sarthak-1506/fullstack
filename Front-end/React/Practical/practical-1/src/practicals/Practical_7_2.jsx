import React from 'react'

function Practical_7_2() {
   const users = [
    { id: 1, name: "Sarthak" },
    { id: 2, name: "Sarthak" },
    { id: 3, name: "Sarthak" }
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default Practical_7_2