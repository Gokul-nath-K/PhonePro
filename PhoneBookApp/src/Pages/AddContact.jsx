import React from "react";
import store from "../Assets/Redux/Store";

function AddContact() {
  return (
    <>
      {/* <p style={{ color: "white" }}>Add contact page...</p> */}
      {/* <p style={{ color: "white" }}> {store.getState().email} </p> */}
      <div className="container-fluid pt-4" style={{ maxWidth : "80%", paddingRight : "5%"}}>
        <h3 className="py-3 text-light">New Contact</h3>
      <form>
        <div className="form-group pb-4">
          {/* <label className="text-white p-2 pb-3">Name</label> */}
          <input
            style={{color : "white"}}
            type="text"
            className="add-con-input my-3 form-control bg-secondary"
            id="exampleInputEmail1"
            placeholder="Enter Name"
            />
        </div>
        <div className="form-group pb-4">
          {/* <label className="text-white p-2 pb-3">Mobile number</label> */}
          <input
            style={{color : "white"}}
            type="number"
            className="add-con-input my-3 form-control bg-secondary"
            id="exampleInputPassword1"
            placeholder="Mobile number"
            />
        </div>
        <div className="form-group pb-4">
          {/* <label className="text-white p-2 pb-3">Email address</label> */}
          <input
            style={{color : "white"}}
            type="email"
            className="add-con-input my-3 form-control bg-secondary"
            id="exampleInputEmail1"
            placeholder="Enter email"
            />
        </div>
        <div className="form-group pb-4">
          {/* <label className="text-white p-2 pb-3">Group</label> */}
          <input
            style={{color : "white"}}
            type=""text
            className="add-con-input my-3 form-control bg-secondary"
            id="exampleInputEmail1"
            placeholder="Enter group name"
            />
        </div>
        <div className="pt-4">
        <button type="submit" className="btn btn-primary d-flex align-items-center">
          Submit
        </button>
        </div>
      </form>
            </div>
    </>
  );
}

export default AddContact;
