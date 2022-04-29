import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../../components/login/Login.component";
import { useUser } from "../../context/UserProvider";

const LoginPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email && user?._id) navigate("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return <LoginComponent />;
};

export default LoginPage;
