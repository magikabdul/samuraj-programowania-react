import React, { Component } from "react";
import Divination from "./Divination";

class App extends Component {
   state = {
      divination: [
         { id: 1, text: "pierwsza" },
         { id: 2, text: "druga" },
         { id: 3, text: "trzecia" }
      ],
      randomText: ""
   };

   handleRandomDivinationClick = () => {
      const range = this.state.divination.length;
      const idx = Math.floor(Math.random() * range);
      // console.log(Math.floor(Math.random() * range));
      this.setState({
         randomText: this.state.divination[idx].text
      });
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
            <input style={{ margin: 20 }} type="text" name="" id="" />
            <button>Dodaj wróźbę</button>
            <Divination text={this.state.randomText} />
         </>
      );
   }
}

export default App;
