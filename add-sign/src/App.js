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

   handleClick = () => {
      const number = Math.floor(Math.random() * 10);

      // this.setState({
      //    text: this.state.text + letter
      // });

      this.setState(() => ({
         text: this.state.text + number
      }));
   };

   render() {
      return (
         <>
            <button onClick={this.handleClick}>Dodaj "A"</button>
            <PanelResult text={this.state.text} />
         </>
      );
   }
}

const PanelResult = props => {
   return <h1>{props.text}</h1>;
};

export default App;
