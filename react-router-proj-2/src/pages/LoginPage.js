import React from "react";

const LoginPage = () => {
  return (
    <div>
      <label htmlFor="login">
        Podaj login
        <input type="text" id="login" />
      </label>
      <label htmlFor="pass">
        Podaj hasło
        <input type="password" id="pass" />
      </label>
      <button>Zaloguj</button>
    </div>
  );
};

export default LoginPage;
