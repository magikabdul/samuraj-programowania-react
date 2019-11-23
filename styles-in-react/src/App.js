import React, { Component } from "react";

import Text from "./Text";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Witaj na stronie</h1>
        <Text />
      </div>
    );
  }
}

export default App;
