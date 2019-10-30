import React from "react";
import "./App.css";

const data = {
   users: [
      {
         id: 1,
         age: 29,
         name: "Arek",
         sex: "male"
      },
      {
         id: 2,
         age: 49,
         name: "Marta",
         sex: "female"
      },
      {
         id: 3,
         age: 19,
         name: "Stasia",
         sex: "female"
      },
      {
         id: 4,
         age: 24,
         name: "Karol",
         sex: "male"
      }
   ]
};

// const Buttons = props => {
//    return (
//       <>
//          <button onClick={props.handleFilterChange("male")}>
//             Pokaż wszysktkich
//          </button>
//          <button onClick={props.handleFilterChange}>Pokaż kobiety</button>
//          <button onClick={props.handleFilterChange}>Pokaż mężczyzn</button>
//       </>
//    );
// };

const User = ({ user }) => {
   return (
      <div className="userInfo">
         <h1>{user.name}</h1>
         <p>Informacje o użytkowniku</p>
         <p>
            Wiek użytkownika: <strong>{user.age}</strong> lat
         </p>
         <p>Płeć użytkownika: {user.sex}</p>
      </div>
   );
};

class ListUsers extends React.Component {
   state = {
      filter: "all"
   };

   userList = () => {
      let users = data.users;

      if (this.state.filter === "male") {
         users = users.filter(user => user.sex === "male");
      } else if (this.state.filter === "female") {
         users = users.filter(user => user.sex === "female");
      }
      users = users.map(user => <User user={user} key={user.id} />);

      return users;
   };

   handleFilterChange = filter => {
      this.setState({
         filter: filter
      });
   };

   render() {
      return (
         <>
            {/* <Buttons filter={this.handleFilterChange(this.state.filter)} /> */}
            <button onClick={this.handleFilterChange.bind(this, "all")}>
               Pokaż wszysktkich
            </button>
            <button onClick={this.handleFilterChange.bind(this, "female")}>
               Pokaż kobiety
            </button>
            <button onClick={this.handleFilterChange.bind(this, "male")}>
               Pokaż mężczyzn
            </button>
            {this.userList()}
         </>
      );
   }
}

export default ListUsers;
