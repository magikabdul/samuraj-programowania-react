import React, { Component } from "react";
import "./AddTask.scss";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: new Date().toLocaleString()
  };

  render() {
    return (
      <div className="form">
        <input
          type="text"
          placeholder="dodaj zadanie"
          value={this.state.text}
          name=""
          id=""
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          name=""
          id="important"
        />
        <label htmlFor="important">Priorytet</label>
        <br />
        <label htmlFor="date">Do kiedy zrobić</label>
        <input
          type="date"
          name=""
          id="date"
          value={this.state.date}
          min=""
          max=""
        />
        <br />
        <button>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;
