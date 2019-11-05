import React, { Component } from "react";
// import Dollars from "./Dollars";
// import Euros from "./Euros";
import Cash from "./Cash";

class App extends Component {
   state = {
      amount: "",
      product: "electricity"
      // ratioDollar: 3.6,
      // ratioEuro: 4.2
   };

   static defaultProps = {
      currencies: [
         { id: 0, name: "PLN", ratio: 1, title: "Wartość w PLN: " },
         { id: 1, name: "$", ratio: 3.6, title: "Wartość w $: " },
         { id: 2, name: "€", ratio: 4.2, title: "Wartość w €: " },
         { id: 3, name: "Y", ratio: 1.6, title: "Wartość w Y: " }
      ],
      price: {
         electricity: 0.51,
         gas: 4.76,
         oranges: 3.79
      }
   };

   handleChange = e => {
      this.setState({
         amount: e.target.value
      });
   };

   handleSelect = e => {
      this.setState({
         product: e.target.value,
         amount: ""
      });
   };

   insertSuffix = () => {
      if (this.state.product === "electricity") {
         return <em>kWh</em>;
      } else if (this.state.product === "gas") {
         return <em>litry</em>;
      } else if (this.state.product === "oranges") {
         return <em>szt</em>;
      } else {
         return "null";
      }
   };

   selectPrice(select) {
      return this.props.price[select];
   }

   render() {
      const calculations = this.props.currencies.map(curr => (
         <Cash
            key={curr.id}
            cash={this.state.amount}
            ratio={curr.ratio}
            title={curr.title}
            price={this.selectPrice(this.state.product)}
         />
      ));

      return (
         <>
            <div>
               <label htmlFor="">
                  Wybierz produkt
                  <select
                     name=""
                     id=""
                     value={this.state.product}
                     onChange={this.handleSelect}>
                     <option value="electricity">prąd</option>
                     <option value="gas">benzyna</option>
                     <option value="oranges">pomarańcze</option>
                  </select>
               </label>
            </div>
            <label htmlFor="">
               <input
                  type="number"
                  value={this.state.amount}
                  onChange={this.handleChange}
               />
               {this.insertSuffix()}
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
