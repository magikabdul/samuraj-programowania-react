import React, { Component } from "react";
import Divination from "./Divination";

class App extends Component {
   state = {
      divination: [
         { id: 1, text: "pierwsza" },
         { id: 2, text: "druga" },
         { id: 3, text: "trzecia" }
      ],
      randomText: "",
      value: ""
   };

   handleRandomDivinationClick = () => {
      const range = this.state.divination.length;
      const idx = Math.floor(Math.random() * range);
      // console.log(Math.floor(Math.random() * range));
      this.setState({
         randomText: this.state.divination[idx].text
      });
   };

   handleInputChange = e => {
      this.setState({
         value: e.target.value
      });
   };

   handleAddDivination = () => {
      if (this.state.value.length > 0) {
         const range = this.state.divination.length + 1;
         const newArray = this.state.divination;
         console.log(newArray);
         newArray.push({
            id: range,
            text: this.state.value
         });
         this.setState({
            divination: newArray,
            value: ""
         });
      }
   };

   render() {
      return (
         <>
            <button
               onClick={this.handleRandomDivinationClick}
               style={{ margin: 20 }}>
               Zabacz wróźbę
            </button>
            <br />
            <input
               value={this.state.value}
               onChange={this.handleInputChange}
               style={{ margin: 20 }}
               type="text"
               name=""
               id=""
            />
            <button onClick={this.handleAddDivination}>Dodaj wróźbę</button>
            <Divination text={this.state.randomText} />
         </>
      );
   }
}

export default App;
