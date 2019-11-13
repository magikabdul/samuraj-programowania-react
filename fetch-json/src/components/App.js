import React, { Component } from "react";
import "./App.scss";

import Word from "./Word";

class App extends Component {
  state = {
    words: [],
    isLoaded: false
  };

  componentDidMount() {
    setTimeout(this.fetchData, 3000);
  }

  fetchData = () => {
    fetch("http://localhost:3000/data/words.json").then(response =>
      response.json().then(word => {
        this.setState({
          words: word.words,
          isLoaded: true
        });
      })
    );
  };

  render() {
    const words = this.state.words.map(word => (
      <Word key={word.id} en={word.en} pl={word.pl} />
    ));

    return (
      <ul className="app">{!this.state.isLoaded ? "Wczytuję dane" : words}</ul>
    );
  }
}

export default App;
