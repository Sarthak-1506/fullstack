import React, { Component } from 'react'

export default class Practical_9 extends Component {
   state = {
    users: [],
    loading: true,
    error: null
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data, loading: false }))
      .catch((error) => this.setState({ error: error.message, loading: false }));
  }

  render() {
    const { users, loading, error } = this.state;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

