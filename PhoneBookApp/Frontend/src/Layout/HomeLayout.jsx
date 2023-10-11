import React from "react";
import SideBar from "../Components/SideBar";
import { Outlet } from "react-router-dom";
import Dialpad from "../Components/Dialpad";
import LogoutModal from "../Components/LogoutModal";

function HomeLayout() {
  return (
    <>
      <div className="container-fluid bg-dark bg-gradient">
        <div className="row flex-nowrap" style={{ height: "100vh" }}>
          <div className="col-auto col-md-2 col-xl-2 col-sm-1 px-sm-2 px-0" style={{backgroundColor: "rgb(8, 2, 2)"}}>
            <SideBar />
          </div>
          <div
            className="col col-md-6 col-sm-11 col-xl-7 py-3 px-4 pt-4 overflow-y-auto"
            style={{ height: "100%", backgroundColor: "rgb(252, 233, 241)", }}
          >
            <Outlet />
          </div>
          <div className="col-auto col-md-4 col-xl-3 d-table" style={{ backgroundColor: "rgb(252, 233, 241)"}}>
            <Dialpad />
          </div>
        </div>
      </div>
      <LogoutModal />
    </>
  );
}

export default HomeLayout;
