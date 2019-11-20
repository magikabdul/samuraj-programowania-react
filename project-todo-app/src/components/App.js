import React, { Component } from "react";

import AddTask from "./AddTask";
import TaskList from "./TaskList";

import "./App.scss";

class App extends Component {
  counter = 3;

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
        active: false,
        finishDate: new Date().getTime()
      }
    ]
  };

  deleteTask = id => {
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1); //usuwamy z tablicy el o index i jedną pozycję
    // this.setState({ tasks });

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({ tasks });
  };

  changeTaskStatus = id => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({ tasks });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    };

    this.counter++;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));

    return true;
  };

  render() {
    return (
      <>
        <div className="App">
          <AddTask add={this.addTask} />
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
