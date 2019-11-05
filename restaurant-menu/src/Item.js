import React from "react";

const Item = props => {
   return (
      <li
         style={props.active ? { fontWeight: "bold" } : { color: "gray" }}
         onClick={() => props.changeStatus(props.id)}>
         {props.name}
      </li>
   );
};

export default Item;
