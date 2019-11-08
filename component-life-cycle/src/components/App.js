import React, { Component } from "react";
import "./App.css";
import Child from "./Child";

class App extends Component {
   state = {
      number: 0
   };

   constructor(props) {
      super(props);
      this.state = {};
      console.log("1. Wywołanie konstruktora");
   }

   componentDidMount() {
      console.log("3. Wywołanie componentDidMount");
      this.setState({
         number: 1
      });
   }

   componentDidUpdate(prevProps, prevState) {
      console.log("3. Wywołanie componentDidUpdate");
   }

   render() {
      console.log("2. Wywołanie render");
      return (
         <>
            hhh
            <Child />
         </>
      );
   }
}

export default App;
