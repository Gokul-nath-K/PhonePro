import React, { useState } from "react";
import { ContactService } from "../../Services/ContactService";
import { UserService } from "../../Services/UserService";
import { useNavigate } from "react-router-dom";

function AddContact() {
  const [contact, setContact] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let id = localStorage.getItem("id");

    let userById = await UserService.getById(id);
    const userContact = {
      ...contact,
      user: userById,
    };

    try {
      await ContactService.postContact(userContact);
    } catch (err) {
      console.log(`Error : ${err.message}`);
    }

    navigate(-1);
  };
  return (
    <>
      <div
        className="container-fluid pt-4"
        style={{ maxWidth: "80%", paddingRight: "5%" }}
      >
        <h3 className="py-3" style={{ color: "rgb(8, 2, 2)" }}>
          New Contact
        </h3>
        <form onSubmit={handleSubmit} className="needs-validation">
          <div className="form-group pb-4">
            <input
              required
              onChange={handleChange}
              name="name"
              style={{
                color: "rgb(8, 2, 2)",
                height: "45px",
                fontSize: "18px",
                borderColor: "rgb(8, 2, 2)",
              }}
              type="text"
              className="add-con-input my-3 form-control shadow-sm"
              id="exampleInputEmail1"
              placeholder="Enter Name"
            />
            <div class="invalid-feedback">Required</div>
          </div>
          <div className="form-group pb-4">
            <input
              onChange={handleChange}
              name="phoneno"
              style={{
                color: "rgb(8, 2, 2)",
                height: "45px",
                fontSize: "18px",
                borderColor: "rgb(8, 2, 2)",
              }}
              type="number"
              className="add-con-input my-3 form-control shadow-sm"
              id="exampleInputPassword1"
              placeholder="Mobile number"
              required
            />
          </div>
          <div className="form-group pb-4">
            <input
              onChange={handleChange}
              name="email"
              style={{
                color: "rgb(8, 2, 2)",
                height: "45px",
                fontSize: "18px",
                borderColor: "rgb(8, 2, 2)",
              }}
              type="email"
              className="add-con-input my-3 form-control shadow-sm"
              id="exampleInputEmail1"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group pb-4">
            <input
              onChange={handleChange}
              name="groupname"
              style={{
                color: "rgb(8, 2, 2)",
                height: "45px",
                fontSize: "18px",
                borderColor: "rgb(8, 2, 2)",
              }}
              type=""
              text
              className="add-con-input my-3 form-control shadow-sm"
              id="exampleInputEmail1"
              placeholder="Enter group name"
            />
          </div>
          <div className="pt-4 d-flex ">
            <button
              type="submit"
              className="btn text-white justify-content-center-content"
              style={{
                background:
                  "linear-gradient( 58deg, rgb(8, 2, 2, 0.8), rgb(8, 2, 2)",
                fontSize: "20px",
              }}
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
