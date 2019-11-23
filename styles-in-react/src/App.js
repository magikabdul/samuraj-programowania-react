import React, { Component } from "react";

class App extends Component {
  state = {
    active: false
  };

  render() {
    let btn = {
      border: "2px solid black",
      padding: "10px 20px",
      fontFamily: "arial",
      fontSize: 30,
      display: "block",
      margin: "20px auto"
    };

    if (this.state.active) {
      btn.backgroundColor = "cadetblue";
      btn.color = "white";
    }

    return (
      <>
        <button
          style={btn}
          onClick={() => this.setState({ active: !this.state.active })}>
          {this.state.active ? "Wyłącz" : "Załącz"}
        </button>
      </>
    );
  }
}

export default App;
