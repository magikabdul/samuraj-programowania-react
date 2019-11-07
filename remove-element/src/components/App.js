import React, { Component } from "react";
import List from "./List";

class App extends Component {
   state = {
      elements: [
         { id: 1, name: "Krzysztof" },
         { id: 2, name: "Jacek" },
         { id: 3, name: "Ania" },
         { id: 4, name: "Jurek" }
      ]
   };

   handleElementRemove = e => {
      const id = parseInt(e.target.id, 10);
      const elements = [];

      this.state.elements.map(element => {
         if (element.id !== id) {
            elements.push(element);
         }
      });

      this.setState({
         elements
      });
   };

   render() {
      return (
         <>
            <List
               elements={this.state.elements}
               click={this.handleElementRemove}
            />
         </>
      );
   }
}

export default App;
