import React, { Component } from "react";

class App extends Component {
   state = {
      divination: [
         {id:1, text:"pierwsza"},
         {id:2, text:"druga"},
         {id:3, text:"trzecia"}
      ]
   };
   render() {
      return (
         <>
            <button>Zabacz wróźbę</button>
            <br />
            <input type="text" name="" id="" />
            <button>Dodaj wróźbę</button>
         </>
      );
   }
}

export default App;
