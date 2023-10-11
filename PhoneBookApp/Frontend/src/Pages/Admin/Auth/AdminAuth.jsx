import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const AdminAuth = () => {
  const Token = localStorage.getItem("Token") !== null;
  const Role = localStorage.getItem("role") === "ADMIN";

  return (
      Token && Role ? <Outlet /> : <Navigate to="/signin" />
  );
};

export default AdminAuth;
