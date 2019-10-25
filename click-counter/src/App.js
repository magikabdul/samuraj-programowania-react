import React from "react";

class App extends React.Component {
   state = {
      count: 0,
      result: 0
   };

   handleMathClick = (type, number = 1) => {
      if (type === "substraction") {
         this.setState(prevState => ({
            count: prevState.count + 1,
            result: prevState.result - number
         }));
      } else if (type === "reset") {
         this.setState(prevState => ({
            count: prevState.count + 1,
            result: 0
         }));
      } else {
         this.setState(prevState => ({
            count: prevState.count + 1,
            result: prevState.result + number
         }));
      }
   };

   render() {
      return (
         <>
            <button onClick={this.handleMathClick.bind(this, "substraction", 10)}>-10</button>
            <button onClick={() => this.handleMathClick("substraction", 1)}>-1</button>
            <button onClick={this.handleMathClick.bind(this, "reset")}>Reset</button>
            <button onClick={() => this.handleMathClick()}>+1</button>
            <button onClick={() => this.handleMathClick("adding", 10)}>+10</button>
            <h1>Liczba kliknięć: {this.state.count}</h1>
            <h1>Wynik: {this.state.result}</h1>
         </>
      );
   }
}

export default App;
