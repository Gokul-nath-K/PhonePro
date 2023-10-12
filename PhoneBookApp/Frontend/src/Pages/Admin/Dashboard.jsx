import React from "react";
import { AdminSidebar } from "./AdminSidebar";
import Feedbacks from "./Feedbacks";
import { Outlet } from "react-router-dom";
import LogoutModal from "../../Components/LogoutModal";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid bg-dark min-vh-100">
        <AdminSidebar />
        <div
          className="card bg-secondary rounded-5"
          style={{
            position: "absolute",
            left: "17%",
            top: "10%",
            bottom: "3%",
            width: "81%",
          }}
        >
          <div className="card-body">
            <div className="container-fluid my-5 mx-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <LogoutModal />
    </>
  );
};

export default Dashboard;
