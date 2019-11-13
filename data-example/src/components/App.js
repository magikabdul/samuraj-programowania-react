import React, { Component } from "react";

const data = [
  { id: 1, title: "Wiadomość nr 1", body: "Zawartość wiadomości nr 1 ..." },
  { id: 2, title: "Wiadomość nr 2", body: "Zawartość wiadomości nr 2 ..." },
  { id: 3, title: "Wiadomość nr 3", body: "Zawartość wiadomości nr 3 ..." }
];

setInterval(() => {
  const index = data.length + 1;

  data.push({
    id: index,
    title: `Wiadomość nr ${index}`,
    body: `Zawartość wiadomości nr ${index} ...`
  });
}, 8000);

class App extends Component {
  state = {
    comments: [...data]
  };

  getData = () => {
    if (this.state.comments.length !== data.length) {
      this.setState({ comments: [...data] });
    }
  };

  componentDidMount() {
    this.idI = setInterval(this.getData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.idI);
  }

  render() {
    const comments = this.state.comments.map(comment => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <p>{comment.body}</p>
      </div>
    ));

    return <div className="app">{comments.reverse()}</div>;
  }
}

export default App;
