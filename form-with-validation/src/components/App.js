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
    },

    showConfirmation: false
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

  formValidation = () => {
    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;

    if (
      this.state.username.length >= 10 &&
      this.state.username.indexOf(" ") === -1
    ) {
      username = true;
    }

    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }

    if (this.state.password.length === 8) {
      password = true;
    }

    if (this.state.accept) {
      accept = true;
    }

    if (username && email && password && accept) {
      correct = true;
    }

    return { username, email, password, accept, correct };
  };

  handleSubmit = e => {
    e.preventDefault();

    const validation = this.formValidation();
    console.log(validation);
    if (validation.correct) {
      this.setState({
        username: "",
        email: "",
        password: "",
        accept: false,
        showConfirmation: true,

        errors: {
          username: false,
          email: false,
          password: false,
          accept: false
        }
      });
      setTimeout(() => this.setState({ showConfirmation: false }), 3000);
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          password: !validation.password,
          accept: !validation.accept
        }
      });
    }
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
