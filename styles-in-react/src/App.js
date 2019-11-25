import React, { Component } from "react";

import Text from "./Text";

import "./App.css";

class App extends Component {
  state = {
    underline: false
  };

  render() {
    const text = "Witaj na stronie";
    // let classes = "one";

    // if (this.state.underline) classes += " line";
    // if (text.length > 10) classes += " big";

    const classes = ["one"];
    if (this.state.underline) classes.push("line");
    if (text.length > 10) classes.push("big");

    return (
      <div
        className="app"
        onClick={() =>
          this.setState({
            underline: !this.state.underline
          })
        }>
        <h1 className={classes.join(" ")}>Witaj na stronie</h1>
        <Text />
      </div>
    );
  }
}

export default App;
