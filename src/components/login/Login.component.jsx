import React, { useState } from "react";
import Button from "../shared/button/Button.component";
import "./login.css";
import LoginBox from "./LoginBox.component";
import Register from "./Register.component";

const LoginComponent = () => {
  const [login, setLogin] = useState(true);
  const [isStudent, setStudent] = useState(true);

  const handleClick = () => {
    setLogin((toggle) => !toggle);
  };

  return (
    <div className="login-component">
      <div className="login-register">
        <div className="login-intro flex-row centerAll">
          <img src="/library-logo.png" className="login-logo" alt="login" />
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
            onClick={handleClick}
          >
            Login
          </Button>
          <Button className={!login ? " border " : " "} onClick={handleClick}>
            Register
          </Button>
        </div>
        <div className="login">
          <div className="login-form">
            {login ? <LoginBox /> : <Register />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
