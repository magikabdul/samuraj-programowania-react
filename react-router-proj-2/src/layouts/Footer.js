import React from "react";

import "../styles/Footer.css";

import { Route } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <h2>STOPKA</h2>
      <Route
        path="/"
        exact
        render={() => {
          return (
            <p>
              Jesteś na <span>stronie głównej</span>
            </p>
          );
        }}
      />

      <Route
        path="/:page"
        exact
        render={props => {
          return (
            <p>
              Jesteś na <span>{props.match.params.page}</span>
            </p>
          );
        }}
      />

      <Route
        path="/:page/:idProduct"
        exact
        render={props => {
          return (
            <p>
              Jesteś na <span>{props.match.params.page}</span>
              <br />
              Jesteś na <span>{props.match.params.idProduct}</span>
            </p>
          );
        }}
      />
    </div>
  );
};

export default Footer;
