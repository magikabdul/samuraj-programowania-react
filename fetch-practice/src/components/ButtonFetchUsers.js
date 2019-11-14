import React from "react";

const ButtonFetchUsers = props => {
  return (
    <>
      <button hidden onClick={props.click}>
        {" "}
        Dodaj 5 użytkowników
      </button>
      <button style={{ padding: "10px 20px" }} onClick={props.add}>
        Dodaj użytkownika
      </button>
    </>
  );
};

export default ButtonFetchUsers;
