import React, { Component } from "react";
import "./App.css";

import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=5";
const API_ONE = "https://randomuser.me/api/?results=1";

class App extends Component {
  state = {
    users: []
  };

  handleDataFetch = () => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Błąd !!!!");
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data.results });
      })
      .catch(e => console.log(e));
  };

  handleAddUser = () => {
    fetch(API_ONE)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("error");
      })
      .then(response => response.json())
      .then(data => {
        const user = data.results;
        this.setState(prevState => ({
          users: prevState.users.concat(user)
        }));
      })
      .catch(e => console.log(e));
  };

  render() {
    const users = this.state.users;

    return (
      <>
        <ButtonFetchUsers
          click={this.handleDataFetch}
          add={this.handleAddUser}
        />
        {users ? <UsersList users={users} /> : users}
      </>
    );
  }
}

export default App;
