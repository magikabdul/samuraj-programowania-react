import React from "react";

const Word = props => {
  return (
    <li>
      Słowo po angielsku <strong>{props.en}</strong>. Tłumaczenie:{" "}
      <strong>{props.pl}</strong>
    </li>
  );
};

export default Word;
