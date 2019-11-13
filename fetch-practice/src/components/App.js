import React, { Component } from "react";
import "./App.css";

import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <ButtonFetchUsers />
        <UsersList />
      </>
    );
  }
}

export default App;
