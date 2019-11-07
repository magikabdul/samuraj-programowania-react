import React from "react";
import Element from "./Element";

const List = props => {
   const elements = props.elements;

   return (
      <>
         {elements.map(element => (
            <Element
               key={element.id}
               id={element.id}
               name={element.name}
               click={props.click}
            />
         ))}
      </>
   );
};

export default List;
