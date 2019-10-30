import React from "react";
import "./App.css";

class ListItems extends React.Component {
   state = {
      items: ["jabłko", "śliwka", "gruszka"]
   };

   render() {
      return (
         <>
            <ul>
               {this.state.items.map((item, idx) => {
                  return <li key={idx}>{`owoc ${item}`}</li>;
               })}
            </ul>
         </>
      );
   }
}

export default ListItems;
