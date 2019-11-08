import React, { Component } from "react";

class Child extends Component {
   state = {};
   componentDidMount() {
      console.log("Wywołanie componentDidMount w Child");
   }

   render() {
      console.log("Wywołanie render w Child");
      return <></>;
   }
}

export default Child;
