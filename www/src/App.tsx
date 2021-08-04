import React from 'react';
import './App.css';

interface MyState {
  wasm: { greet: typeof import('wasm-test').greet }
};

class App extends React.Component<{}, MyState> {

  componentDidMount() {
    this.loadWasm();
  }

  loadWasm = async () => {
    try {
      const wasm = await import("wasm-test");
      this.setState({ wasm });
    } catch (err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    }
  };

  handleClick() {
    const { wasm } = this.state;
    wasm.greet()
  }

  render() {
    return (
      <button
        onClick={() => this.handleClick()}
      >Click me</button>
    );
  }
}

export default App;
