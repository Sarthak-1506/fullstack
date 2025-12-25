import {useState} from 'react'

function Practical_6() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
}

export default Practical_6