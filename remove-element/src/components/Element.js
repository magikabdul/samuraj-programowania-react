import React from "react";

const Element = props => {
   return (
      <>
         <div style={{ margin: 10 }}>
            {props.name}
            <button
               style={{ marginLeft: 10 }}
               onClick={props.click}
               id={props.id}>
               Usuń
            </button>
         </div>
      </>
   );
};

export default Element;
