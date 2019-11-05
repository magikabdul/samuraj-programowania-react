import React, { Component } from "react";
// import Dollars from "./Dollars";
// import Euros from "./Euros";
import Cash from "./Cash";

class App extends Component {
   state = {
      amount: 0,
      ratioDollar: 3.6,
      ratioEuro: 4.2
   };

   handleChange = e => {
      this.setState({
         amount: e.target.value
      });
   };

   render() {
      return (
         <>
            <label htmlFor="">
               <input
                  type="number"
                  value={this.state.amount}
                  onChange={this.handleChange}
               />
            </label>
            {/* <Dollars ratio={this.state.ratioDollar} cash={this.state.amount} /> */}
            {/* <Euros ratio={this.state.ratioEuro} cash={this.state.amount} /> */}

            <Cash
               ratio={this.state.ratioDollar}
               cash={this.state.amount}
               title="Wartość w $: "
            />

            <Cash
               ratio={this.state.ratioEuro}
               cash={this.state.amount}
               title="Wartość w €: "
            />
         </>
      );
   }
}

export default App;
