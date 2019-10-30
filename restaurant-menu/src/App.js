import React from "react";
import "./App.css";
import Header from "./Header.js";
import ListItems from "./ListItems.js";

class App extends React.Component {
   state = {
      items: [
         { id: 1, name: "herbata", active: true },
         { id: 2, name: "zieminiaki", active: false },
         { id: 3, name: "kasza", active: false },
         { id: 4, name: "zupa wodna", active: false },
         { id: 5, name: "wrzątek", active: false },
         { id: 6, name: "chleb", active: true }
      ]
   };

   render() {
      return (
         <>
            <Header items={this.state.items} />
            <ListItems />
         </>
      );
   }
}

export default App;
