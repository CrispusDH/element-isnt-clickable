import React, { Component } from 'react';
import './App.css';
import { Button } from "./components/Button";
import { Block } from "./components/Block";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Block/>
        <Button />
      </div>
    );
  }
}

export default App;
