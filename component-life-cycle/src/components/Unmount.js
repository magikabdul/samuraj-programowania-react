import React, { Component } from "react";
import Child from "./Child";
class Umount extends Component {
   state = {
      status: true
   };

   handleClick = () => {
      this.setState({
         status: !this.state.status
      });
   };

   componentDidMount() {
      console.log("Aplikacja zamontowana");
   }

   componentDidUpdate(prevProps, prevState) {
      console.log("Aplikacja aktualizowana");
   }

   render() {
      return (
         <>
            <h1>Umount Example</h1>
            <button onClick={this.handleClick}>Przełącz</button>
            {this.state.status && <Child status={this.state.status} />}
         </>
      );
   }
}

export default Umount;
