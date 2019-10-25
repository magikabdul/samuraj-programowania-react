import React from "react";
import "./App.css";

class App extends React.Component {
   state = {
      messageIsActive: false
   };

   handleClick = () => {
      this.setState({
         messageIsActive: !this.state.messageIsActive
      })
   }

   render() {
      const text =
         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum consequuntur facere saepe, doloremque, porro enim consequatur magnam commodi quos sit quae natus mollitia nostrum reiciendis eum id quisquam dicta culpa?";

      return (
         <>
            <button onClick={this.handleClick}>Pokaż</button>
            <p>{text}</p>
         </>
      );
   }
}

export default App;
