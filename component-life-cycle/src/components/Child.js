import React, { Component } from "react";

class Child extends Component {
   state = {};
   componentDidMount() {
      console.log("Wywołanie componentDidMount w Child");
   }

   componentDidUpdate() {
      console.log("Wywołanie componentDidUpdate w Child");
   }

   componentWillUnmount() {
      console.log("Wywołanie componentWillUnmount w Child");
   }

   render() {
      console.log("Wywołanie render w Child");
      return <>Child {String(this.props.status)}</>;
   }
}

export default Child;
