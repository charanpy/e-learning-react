import React from "react";
import "./login.css";
const LoginComponent = () => {
  return (
    <div className="login-component ">
      <div className="login-form">
        <div className="login-form-intro">
          <h1>Welcom Back !!</h1>
          <p>Login into your account</p>
        </div>
        <div className="login-form-inputs">
          <div className="ligin-form-input w100">
            <input type={"text"} />
            <span>Roll No</span>
          </div>
          <div className="ligin-form-input w100">
            <input type={"password"} />
            <span>Password</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
