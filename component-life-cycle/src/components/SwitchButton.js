import React from "react";

const SwitchButton = props => {
   return props.active ? (
      <button onClick={props.click}>WYŁĄCZ</button>
   ) : (
      <button onClick={props.click}>WŁĄCZ</button>
   );
};

export default SwitchButton;
