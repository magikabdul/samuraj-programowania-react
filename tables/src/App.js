import React from "react";
import "./App.css";

const Item = props => {
   const { item } = props;

   return <li>{`owoc ${item}`}</li>;
};

class ListItems extends React.Component {
   state = {
      items: ["jabłko", "śliwka", "gruszka"]
   };

   render() {
      return (
         <>
            <ul>
               {this.state.items.map((item, idx) => {
                  // tutaj przekazujemy key!!!!
                  return <Item item={item} key={idx} />;
               })}
            </ul>
         </>
      );
   }
}

export default ListItems;
