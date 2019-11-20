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

  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleCheckbox = e => {
    this.setState({ checked: !this.state.checked });
  };

  handleClick = () => {
    const { text, date, checked } = this.state;

    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate
        });
      }
    }
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
          onChange={this.handleText}
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          name=""
          id="important"
          onChange={this.handleCheckbox}
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
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;
