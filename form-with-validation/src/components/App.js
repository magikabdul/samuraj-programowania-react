import React, { Component } from "react";

import Form from "./Form";

import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    accept: false
  };

  handleChange = e => {
    const name = e.target.name;
    const type = e.target.type;

    if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({ [name]: checked });
    } else {
      const value = e.target.value;
      this.setState({ [name]: value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <Form
          user={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
