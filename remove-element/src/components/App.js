import React, { Component } from "react";
import List from "./List";

class App extends Component {
   state = [
      { id: 1, name: "Krzysztof" },
      { id: 2, name: "Jacek" },
      { id: 3, name: "Ania" },
      { id: 4, name: "Jurek" }
   ];
   render() {
      return (
         <>
            <List elements={this.state} />
         </>
      );
   }
}

export default App;
