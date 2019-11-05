import React from "react";

const Euros = props => {
   return (
      <div>
         Wartość w €:{" "}
         {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}
      </div>
   );
};

export default Euros;
