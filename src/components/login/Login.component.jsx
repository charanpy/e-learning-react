import React, { useState } from "react";
import RegisterComponent from "../register/Register.component";
import Button from "../shared/button/Button.component";
import "./login.css";
const LoginComponent = () => {
  const [login, setLogin] = useState(true);

  const updatelogin = () => {
    setLogin(true);
  };
  const updateRegister = () => {
    setLogin(false);
  };
  return (
    <div className="login-component ">
      <div className="login-register">
        <div className="login-intro flex-row centerAll">
          <img src="/library-logo.png" className="login-logo"></img>
          <p className="login-intro">
            <span className="organization-name ">Name | </span>
            <span className="organization-platform">ePlatform</span>
          </p>
        </div>
        <div className="login-condition flex-row">
          <Button
            className={
              login
                ? "login-condition-login border "
                : "login-condition-login  "
            }
            onClick={updatelogin}
          >
            Login
          </Button>
          <Button
            className={!login ? " border " : " "}
            onClick={updateRegister}
          >
            Register
          </Button>
        </div>
        {login ? (
          <div className="login">
            <div className="login-form">
              <div class="inputBox w100">
                <input
                  type="text"
                  required
                  name="rollno"
                  autoComplete="false"
                />
                <span>Enter RollNumber</span>
              </div>
              <div class="inputBox w100">
                <input type="text" required name="password" />
                <span>Enter Password</span>
              </div>
              <button className="login-button">login</button>
            </div>
            <div className="login-trouble flex-row centerAll">
              <a href="#">
                <p>Trouble logging in?</p>
              </a>
            </div>
          </div>
        ) : (
          <div className="register">
            <RegisterComponent />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginComponent;
