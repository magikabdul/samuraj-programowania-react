import React, { Component } from "react";

import Form from "./Form";

import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    accept: false,

    errors: {
      username: false,
      email: false,
      password: false,
      accept: false
    }
  };

  messages = {
    username_incorrect:
      " Imię musi być dłuższe niż 10 znaków i nie może zawierać spacji",
    email_incorrect: " Brak @ w email",
    password_incorrect: " Hasło musi mieć 8 znaków",
    accept_incorrect: " Niepotwierdzona zgoda"
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
          errors={this.state.errors}
          messages={this.messages}
        />
      </div>
    );
  }
}

export default App;
