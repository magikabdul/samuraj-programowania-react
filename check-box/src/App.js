import React from "react";
import "./App.css";

// const PositiveMessage = () => {
//    return <p>Możesz obejrzeć film. Zapraszamy!</p>;
// };

// const NegativeMessage = () => {
//    return <p>Nie możesz obejrzeć tego filmu, jeżeli masz nimiej niż 16 lat.</p>;
// };

const ValidationMessage = props => {
   return props.txt ? (
      <p>Możesz obejrzeć film. Zapraszamy!</p>
   ) : (
      <p>Nie możesz obejrzeć tego filmu, jeżeli masz nimiej niż 16 lat.</p>
   );
};

const displayMessage = (isConfirmed, isFormSubitted) => {
   if (isFormSubitted) {
      return <ValidationMessage txt={isConfirmed} />;
   }
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

   // displayMessage = () => {
   //    if (this.state.isFormSubitted) {
   //       return <ValidationMessage txt={this.state.isConfirmed} />;
   //       // if (this.state.isConfirmed) {
   //       //    return <PositiveMessage />;
   //       // } else {
   //       //    return <NegativeMessage />;
   //       // }
   //    }
   // };

   render() {
      const { isConfirmed, isFormSubitted } = this.state;

      return (
         <>
            <h1>Kup bilet na horror roku !</h1>
            <form onSubmit={this.handleFormSubmitt} action="">
               <input
                  type="checkbox"
                  name=""
                  id="age"
                  onChange={this.handleCheckboxChange}
                  checked={isConfirmed}
               />
               <label htmlFor="age">Mam conajmniej 16 lat</label>
               <br />
               <button type="submit">Kup bilet</button>
            </form>
            {displayMessage(isConfirmed, isFormSubitted)}
         </>
      );
   }
}

export default App;
