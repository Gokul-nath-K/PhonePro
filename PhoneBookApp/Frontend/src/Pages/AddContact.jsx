import axios from "axios";
import React, { useState } from "react";

function AddContact() {
  const [contact, setContact] = useState({});

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userContact = {
      email: "gokul@gmail.com",
      phone_no: 6381885164,
      user: {
        id: 1,
        name: "Gokul nath",
        phone_no: 6381885164,
        email: "gokul@gmail.com",
        password: "012345678",
      },
      contacts: [contact],
    };

    try {
      axios.post("http://localhost:8083/user_contact/post", userContact);
    } catch (err) {
      console.log("Error : ${err.message}");
    }
    console.log(userContact);
  };
  return (
    <>
      <div
        className="container-fluid pt-4"
        style={{ maxWidth: "80%", paddingRight: "5%" }}
      >
        <h3 className="py-3 text-light">New Contact</h3>
        <form onSubmit={handleSubmit} className="needs-validation">
          <div className="form-group pb-4">
            <input
              required
              onChange={handleChange}
              name="name"
              style={{ color: "white" }}
              type="text"
              className="add-con-input my-3 form-control bg-secondary"
              id="exampleInputEmail1"
              placeholder="Enter Name"
            />
            <div class="invalid-feedback">
              Required
            </div>
          </div>
          <div className="form-group pb-4">
            <input
              onChange={handleChange}
              name="phone_no"
              style={{ color: "white" }}
              type="number"
              className="add-con-input my-3 form-control bg-secondary"
              id="exampleInputPassword1"
              placeholder="Mobile number"
              required
              />
          </div>
          <div className="form-group pb-4">
            <input
              onChange={handleChange}
              name="email"
              style={{ color: "white" }}
              type="email"
              className="add-con-input my-3 form-control bg-secondary"
              id="exampleInputEmail1"
              placeholder="Enter email"
              required
              />
          </div>
          <div className="form-group pb-4">
            <input
              name="group"
              style={{ color: "white" }}
              type=""
              text
              className="add-con-input my-3 form-control bg-secondary"
              id="exampleInputEmail1"
              placeholder="Enter group name"
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="btn btn-primary d-flex align-items-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddContact;
