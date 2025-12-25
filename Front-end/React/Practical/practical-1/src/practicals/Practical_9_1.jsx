import React, { Component } from 'react'

export default class Practical_9_1 extends Component {
  state = {
    count: 0
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(`Component updated. Previous count: ${prevState.count}, Current count: ${this.state.count}`);
  }

  componentWillUnmount() {
    console.log("Component is unmounting...");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

