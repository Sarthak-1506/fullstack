import { useState, useEffect } from "react";
import axios from "axios";

function Practical_12() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  // Fetch users
  useEffect(() => {
    axios.get("http://localhost:5000/users")
      .then(res => { setUsers(res.data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  const handleAdd = () => {
    axios.post("http://localhost:5000/users", newUser)
      .then(res => setUsers([...users, res.data]))
      .catch(err => setError(err.message));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`)
      .then(() => setUsers(users.filter(u => u.id !== id)))
      .catch(err => setError(err.message));
  };

  const handleUpdate = (id, updatedData) => {
    axios.put(`http://localhost:5000/users/${id}`, updatedData)
      .then(res => setUsers(users.map(u => u.id === id ? res.data : u)))
      .catch(err => setError(err.message));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users</h2>
      <input placeholder="Name" onChange={e => setNewUser({...newUser, name: e.target.value})}/>
      <input placeholder="Email" onChange={e => setNewUser({...newUser, email: e.target.value})}/>
      <button onClick={handleAdd}>Add User</button>

      <table border="1" style={{marginTop:"10px"}}>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Email</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button onClick={() => handleDelete(u.id)}>Delete</button>
                <button onClick={() => handleUpdate(u.id, {...u, name: u.name + " Updated"})}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Practical_12;
