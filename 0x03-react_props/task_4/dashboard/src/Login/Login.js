import "./Login.css";
import React from "react";
import holberton_logo from "../holberton_logo.jpg";

function login() {
  return (
    <React.Fragment>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email</label>
        <input type="email" id="email" />
        <label htmlFor='password'>Password</label>
        <input type="password" id="password" />
        <button>Ok</button>
    </React.Fragment>
    );
}
export default login;
