import React from "react";
import { TelephoneFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav
        id="navbar-id"
        className="navbar navbar-expand-lg"
        style={{ height: "9%", zIndex :"999", backgroundColor: "#272829" }}
      >
        <div className="container-fluid">
          <Link style={{ color: "white" }} className="navbar-brand px-3" to="/">
            <TelephoneFill size={20} className="mx-2"/>
            <b>
              PhonePro
            </b>
          </Link>
          <div className="d-flex">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link"
                  to="/signin"
                >
                  Sign in
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link"
                  to="/signin"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
