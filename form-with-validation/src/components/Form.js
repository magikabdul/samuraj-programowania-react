import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.handleSubmit} noValidate>
      <label htmlFor="user">
        Twoje imię:
        <input
          type="text"
          id="user"
          name="username"
          value={props.user.username}
          onChange={props.handleChange}
        />
      </label>

      <label htmlFor="email">
        Twój email:
        <input
          type="email"
          id="email"
          name="email"
          value={props.user.email}
          onChange={props.handleChange}
        />
      </label>

      <label htmlFor="password">
        Twoje hasło:
        <input
          type="password"
          id="password"
          name="password"
          value={props.user.password}
          onChange={props.handleChange}
        />
      </label>

      <label htmlFor="accept">
        <input
          type="checkbox"
          name="accept"
          id="accept"
          checked={props.user.checked}
          onChange={props.handleChange}
        />{" "}
        Wyrażam zgodę
      </label>

      <button>Zapisz się</button>
    </form>
  );
};

export default Form;
