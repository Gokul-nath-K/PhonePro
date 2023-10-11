import React from "react";
import {
  BoxArrowLeft,
  ChatLeftDotsFill,
  HouseFill,
  PersonFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const AdminSidebar = () => {
  const username = localStorage.getItem("name") || "";

  return (
    <>
    <div className="d-flex flex-column align-items-center align-items-sm-start px-5 pt-4 text-white " style={{height: "95vh"}}>
        <Link
          to="/"
          className="d-flex align-items-center pb-5 mb-md-0 me-md-auto text-white text-decoration-none my-4"
        >
          <span className="fs-5 d-none d-sm-inline mb-3" style={{position: "absolute", top : "3%", left: "2%"}}>
            <TelephoneFill size={20} className="mb-2 mx-3" />
            <b>PhonePro</b>
          </span>
        </Link>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item mb-3">
            <Link to="/admin/home" className="nav-link align-middle px-0">
              <HouseFill color="azure" size={20} />{"    "}
              <span className="ms-1 d-none d-sm-inline " style={{color: "rgb(241, 212, 229)"}}>
                Home
              </span>
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link to="feedback" className="nav-link px-0 align-middle">
              <ChatLeftDotsFill color="azure" size={20} />{" "}
              <span className="ms-1 d-none d-sm-inline " style={{color: "rgb(241, 212, 229)"}}>
                Feedback
              </span>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="pb-4">
          <Link
            to="/home"
            className="nav-link align-middle px-0"
            style={{ textDecoration: "none" }}
          >
            <PersonFill color="azure" size={20} />{" "}
            <span className="ms-1 d-none d-sm-inline " style={{color: "rgb(241, 212, 229)"}}>
              {username !== ""
                ? username.slice(0, 9) + "..."
                : "Profile"}
            </span>
          </Link>
        </div>
        <div className="pb-4">
          <button
            className="nav-link align-middle px-0"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ textDecoration: "none" }}
          >
            <BoxArrowLeft color="azure" size={20} />{" "}
            <span className="ms-1 d-none d-sm-inline" style={{color: "rgb(241, 212, 229)"}}>
              Logout
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
