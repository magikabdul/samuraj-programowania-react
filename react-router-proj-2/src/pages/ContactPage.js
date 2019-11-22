import React, { Component } from "react";
import { Prompt } from "react-router-dom";

import "../styles/ContactPage.css";

class ContactPage extends Component {
  state = {
    value: ""
  };

  handleText = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea
            onChange={this.handleText}
            value={this.state.value}
            placeholder="Wpisz wiadomość"></textarea>

          <button>Wyślij</button>
        </form>
        <Prompt when={this.state.value} message="Czy chcesz dalej?" />
      </div>
    );
  }
}

export default ContactPage;
