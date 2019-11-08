import React, { Component } from "react";

class Counter extends Component {
   state = {
      result: 1,
      ratio: 2
   };

   handleClick = () => {
      this.setState({ result: this.state.result * this.state.ratio });
   };

   componentDidUpdate(prevProps, prevState) {
      if (this.state.result > 1000 && this.state.ratio === 2) {
         this.setState({ ratio: 0.5 });
      } else if (this.state.result < 1 && this.state.ratio === 0.5) {
         this.setState({ ratio: 2 });
      }
   }

   render() {
      return (
         <>
            <p>
               Kalkulator mnoży przez 2 do momentu uzyskania wyniku 1000, po tym
               zmiania mnożnk na 0.5, aż do dojścia do zero
            </p>
            <button
               onClick={
                  this.handleClick
               }>{`Pomnóz przez ${this.state.ratio}`}</button>
            <h1>Wynik: {this.state.result}</h1>
         </>
      );
   }
}

export default Counter;
