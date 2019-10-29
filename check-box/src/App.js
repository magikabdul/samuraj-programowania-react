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
      isConfirmed: false,
      isFormSubitted: false
   };

   handleCheckboxChange = () => {
      this.setState({
         isConfirmed: !this.state.isConfirmed,
         isFormSubitted: false
      });
   };

   handleFormSubmitt = e => {
      e.preventDefault();
      if (!this.state.isFormSubitted) {
         this.setState({
            isFormSubitted: true
         });
      }
   };

   displayMessage = () => {
      if (this.state.isFormSubitted) {
         if (this.state.isConfirmed) {
            return <PositiveMessage />;
         } else {
            return <NegativeMessage />;
         }
      }
   };

   render() {
      return (
         <>
            <h1>Kup bilet na horror roku !</h1>
            <form onSubmit={this.handleFormSubmitt} action="">
               <input
                  type="checkbox"
                  name=""
                  id="age"
                  onChange={this.handleCheckboxChange}
                  checked={this.state.isConfirmed}
               />
               <label htmlFor="age">Mam conajmniej 16 lat</label>
               <br />
               <button type="submit">Kup bilet</button>
            </form>
            {this.displayMessage()}
         </>
      );
   }
}

export default App;
