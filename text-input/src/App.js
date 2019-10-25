import React from "react";
import "./App.css";

class App extends React.Component {
   state = {
      value: ""
   };

   // tutaj, albo należy skorzystać z bind przy wywoływaniu metody, ale należy
   // użyć funkcji strzałkowej
   // handleInputChange(e) {
   //    console.log(e.target.value);
   //    this.setState({
   //       value: e.target.value
   //    });
   // }

   handleInputChange = e => {
      this.setState({
         value: e.target.value
      });
   };

   handleReset = () => {
      this.setState({
         value: ""
      });
   };

   render() {
      return (
         <>
            {/* <input placeholder="wpisz..." onChange={this.handleInputChange.bind(this)} type="text"></input> */}
            <input value={this.state.value} placeholder="wpisz..." onChange={this.handleInputChange} type="text"></input>
            <button onClick={this.handleReset}>Reset</button>
            <h1 className="title">{this.state.value.toUpperCase()}</h1>
         </>
      );
   }
}

export default App;
