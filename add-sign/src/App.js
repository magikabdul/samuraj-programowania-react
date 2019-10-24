import React, { Component } from "react";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         text: ""
      };
   }

   // state = {
   //    text: ""
   // };

   handleClick() {
      const letter = "a";

      // this.setState({
      //    text: this.state.text + letter
      // });

      this.setState(() => ({
         text: this.state.text + letter
      }));
   }

   render() {
      return (
         <>
            <button onClick={this.handleClick.bind(this)}>Dodaj "A"</button>
            <h1>{this.state.text}</h1>
         </>
      );
   }
}

export default App;
