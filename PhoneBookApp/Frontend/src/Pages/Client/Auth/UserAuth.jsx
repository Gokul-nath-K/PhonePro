import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const UserAuth = () => {
  const Token = localStorage.getItem("Token") !== null;
  const Role = localStorage.getItem("role") === "USER";

  return Token && Role ? <Outlet /> : <Navigate to="/signin" />;
};

export default UserAuth;
