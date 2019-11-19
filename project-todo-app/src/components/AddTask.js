import React, { Component } from "react";
import "./AddTask.scss";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    text: "",
    checked: false,
    date: this.minDate
  };

  handleDateChange = e => {
    this.setState({ date: e.target.value });
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";

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
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDateChange}
        />
        <br />
        <button>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;
