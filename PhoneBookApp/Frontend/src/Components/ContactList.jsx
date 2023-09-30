import React from "react";
import { contacts } from "../Assets/Contexts/Contacts";
const ContactList = () => {
  return (
    <>
      <div className="container-fluid" style={{ paddingRight: "5%" }}>
        <div className="row ">
          <h3 className="py-3 px-4 text-light">All contacts</h3>
        </div>
        <div className="row" style={{ height: "100vh" }}>
          <div className="col overflow-y-auto mx-3" style={{ height: "100%" }}>
            {contacts &&
              contacts.map((contact) => {
                return (
                  <div key={contact.id}>
                    <div className="row bg-transparent border-bottom py-2">
                      <div className="col-1">
                        <button
                          type="button"
                          className="btn btn-secondary rounded-circle"
                          disabled
                        >
                          {contact.name.slice(0, 1)}
                        </button>
                      </div>
                      <div className="col">
                        <p className="pt-2 text-light"> {contact.name} </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div
            className="col-1 overflow-y-auto d-flex justify-content-center bg-transparent"
            style={{ height: "100%" }}
          >
            <ul
              className="list-group bg-transparent"
              style={{ fontSize: "12px" }}
            >
              <li className="list-group-item bg-transparent text-light border-0">
                A
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                B
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                C
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                D
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                E
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                F
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                G
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                H
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                I
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                J
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                K
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                L
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                M
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                N
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                O
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                P
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                Q
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                R
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                S
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                T
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                U
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                V
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                W
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                X
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                Y
              </li>
              <li className="list-group-item bg-transparent text-light border-0">
                Z
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactList;
