import React, { Component } from "react";
// import Dollars from "./Dollars";
// import Euros from "./Euros";
import Cash from "./Cash";

class App extends Component {
   state = {
      amount: 0
      // ratioDollar: 3.6,
      // ratioEuro: 4.2
   };

   currencies = [
      { id: 1, name: "$", ratio: 3.6, title: "Wartość w $: " },
      { id: 2, name: "€", ratio: 4.2, title: "Wartość w €: " },
      { id: 3, name: "Y", ratio: 1.6, title: "Wartość w Y: " }
   ];

   handleChange = e => {
      this.setState({
         amount: e.target.value
      });
   };

   render() {
      const calculations = this.currencies.map(curr => (
         <Cash
            key={curr.id}
            cash={this.state.amount}
            ratio={curr.ratio}
            title={curr.title}
         />
      ));

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
            {/* <Cash
               ratio={this.state.ratioDollar}
               cash={this.state.amount}
               title="Wartość w $: "
            />

            <Cash
               ratio={this.state.ratioEuro}
               cash={this.state.amount}
               title="Wartość w €: "
            /> */}
            {calculations}
         </>
      );
   }
}

export default App;
