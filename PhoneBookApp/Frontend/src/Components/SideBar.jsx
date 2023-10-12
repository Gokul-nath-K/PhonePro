import React from "react";
import {
  BoxArrowLeft,
  HouseFill,
  PersonFill,
  PersonFillAdd,
  Search,
  TelephoneFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function SideBar() {
  const username = localStorage.getItem("name") || "";

  return (
    <>
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <Link
          to="/"
          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none my-4"
        >
          <span className="fs-5 d-none d-sm-inline mb-2">
            <TelephoneFill size={20} className="mx-2" />
            <b>PhonePro</b>
          </span>
        </Link>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item mb-3">
            <Link to="/user/home" className="nav-link align-middle px-0">
              <HouseFill color="azure" size={20} />{" "}
              <span
                className="ms-1 d-none d-sm-inline "
                style={{ color: "rgb(241, 212, 229)" }}
              >
                Home
              </span>
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link to="addcontact" className="nav-link px-0 align-middle">
              <PersonFillAdd color="azure" size={20} />{" "}
              <span
                className="ms-1 d-none d-sm-inline "
                style={{ color: "rgb(241, 212, 229)" }}
              >
                New contact
              </span>
            </Link>
          </li>
          {/* <li className="nav-item mb-3">
            <Link to="editcontact" className="nav-link px-0 align-middle">
              <PersonFillGear color="azure" size={20} />{" "}
              <span className="ms-1 d-none d-sm-inline text-secondary">
                Edit contact
              </span>
            </Link>
          </li> */}
          <li className="nav-item mb-3">
            <Link to="search" className="nav-link px-0 align-middle">
              <Search color="azure" size={20} />{" "}
              <span
                className="ms-1 d-none d-sm-inline "
                style={{ color: "rgb(241, 212, 229)" }}
              >
                Search
              </span>
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link to="import-contacts" className="nav-link px-0 align-middle">
              <PersonFillAdd color="azure" size={20} />{" "}
              <span
                className="ms-1 d-none d-sm-inline"
                style={{ color: "rgb(241, 212, 229)" }}
              >
                Import contact
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
            <span
              className="ms-1 d-none d-sm-inline "
              style={{ color: "rgb(241, 212, 229)" }}
            >
              {username !== "" ? username.slice(0, 9) + "..." : "Profile"}
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
            <span
              className="ms-1 d-none d-sm-inline"
              style={{ color: " rgb(241, 212, 229)" }}
            >
              Logout
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default SideBar;
