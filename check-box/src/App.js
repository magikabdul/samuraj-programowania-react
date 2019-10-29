import React from "react";
import "./App.css";

const PositiveMessage = () => {
   return <p>Możesz obejrzeć film. Zapraszamy!</p>;
};

const NegativeMessage = () => {
   return <p>Nie możesz obejrzeć tego filmu, jeżeli masz nimiej niż 16 lat.</p>;
};

class App extends React.Component {
   state = {
      isConfirmed: false
   };

   handleCheckboxChange = () => {
      this.setState({
         isConfirmed: !this.state.isConfirmed
      });
   };

   render() {
      return (
         <>
            <h1>Kup bilet na horror roku !</h1>
            <input
               type="checkbox"
               name=""
               id="age"
               onChange={this.handleCheckboxChange}
               checked={this.state.isConfirmed}
            />
            <label htmlFor="age">Mam conajmniej 16 lat</label>
            {this.state.isConfirmed ? <PositiveMessage /> : <NegativeMessage />}
         </>
      );
   }
}

export default App;
