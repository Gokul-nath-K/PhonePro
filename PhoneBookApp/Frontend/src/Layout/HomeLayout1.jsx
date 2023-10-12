import React from "react";
import LogoutModal from "../Components/LogoutModal";
import Dialpad from "../Components/Dialpad";
import SideBar from "../Components/SideBar";
import { AdminSidebar } from "../Pages/Admin/AdminSidebar";
import ContactList from "../Components/ContactList";
import { Outlet } from "react-router-dom";

const HomeLayout1 = () => {
  return (
    <>
      <div className="container-fluid bg-dark max-vh-100 position-relative overflow-y-hidden">
        <SideBar />
        <div
          className="card bg-secondary rounded-5"
          style={{
            position: "absolute",
            right: "2%",
            top: "10%",
            width: "83%",
            height: "86vh",
          }}
        >
          <div className="card-body p-4" accordion style={{}}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-9">
                  <Outlet />
                </div>
                <div className="col">
                  <div style={{ height: "5%" }}></div>
                  <Dialpad />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogoutModal />
    </>
  );
};

export default HomeLayout1;
