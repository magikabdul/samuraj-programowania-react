import React from "react";

const Cash = props => {
   const val = ((props.cash / props.ratio) * props.price).toFixed(2);

   return (
      <>
         <div>
            {props.title} {props.cash <= 0 ? "" : val}
         </div>
      </>
   );
};

export default Cash;
