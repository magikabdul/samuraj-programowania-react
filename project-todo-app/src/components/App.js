import React, { Component } from "react";

import AddTask from "./AddTask";
import TaskList from "./TaskList";

import "./App.scss";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać",
        date: "2019-11-18",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "zrobić dobry uczynek",
        date: "2019-01-08",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "pomalować",
        date: "2020-01-02",
        important: true,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTask = id => {
    console.log(id)
  };

  changeTaskStatus = id => {
    
  };

  render() {
    return (
      <>
        <div className="App">
          <AddTask />
          <TaskList
            tasks={this.state.tasks}
            delete={this.deleteTask}
            change={this.changeTaskStatus}
          />
        </div>
      </>
    );
  }
}

export default App;
