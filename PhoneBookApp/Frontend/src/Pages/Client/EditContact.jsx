import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getEditedContacts } from "../../Assets/Slices/ContactSlice";
import { ContactService } from "../../Services/ContactService";
import { useNavigate } from "react-router-dom";
function EditContact() {
  const navigate = useNavigate();
  let editedContact = useSelector(getEditedContacts);
  const [contact, setContact] = useState({});

  useEffect(() => {
    if (Object.keys(editedContact).length === 0) {
      navigate(-1);
    } else {
      setContact({
        id: editedContact.id,
        name: editedContact.name,
        phoneno: editedContact.phoneno,
        email: editedContact.email,
        groupname: editedContact.groupname,
        user_id: editedContact.user_id
       });
    }
  }, [editedContact, navigate]);

  console.log(editedContact);
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await ContactService.updateContact(contact, contact.id);
      navigate(-1);
    } catch (err) {}
  };
  return (
    <>
      <div
        className="container-fluid pt-4"
        style={{ maxWidth: "80%", paddingRight: "5%" }}
      >
        <h3 className="py-3" style={{ color: "rgb(8, 2, 2)" }}>
          Edit Contact
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group pb-4">
            <input
              name="name"
              type="text"
              className="add-con-input my-3 form-control"
              id="exampleInputEmail1"
              placeholder="Enter Name"
              defaultValue={contact.name}
              onChange={handleChange}
              style={{
                color: "rgb(8, 2, 2)",
                height: "45px",
                fontSize: "18px",
                borderColor: "rgb(8, 2, 2)",
              }}
            />
          </div>
          <div className="form-group pb-4">
            <input
              name="phoneno"
              type="number"
              className="add-con-input my-3 form-control"
              id="exampleInputPassword1"
              placeholder="Mobile number"
              defaultValue={contact.phoneno}
              onChange={handleChange}
              style={{
                color: "rgb(8, 2, 2)",
                height: "45px",
                fontSize: "18px",
                borderColor: "rgb(8, 2, 2)",
              }}
            />
          </div>
          <div className="form-group pb-4">
            <input
              name="email"
              type="email"
              className="add-con-input my-3 form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              defaultValue={contact.email}
              onChange={handleChange}
              style={{
                color: "rgb(8, 2, 2)",
                height: "45px",
                fontSize: "18px",
                borderColor: "rgb(8, 2, 2)",
              }}
            />
          </div>
          <div className="form-group pb-4">
            <input
              name="groupname"
              type="text"
              className="add-con-input my-3 form-control"
              id="exampleInputEmail1"
              placeholder="Enter group name"
              defaultValue={contact.groupname}
              onChange={handleChange}
              style={{
                color: "rgb(8, 2, 2)",
                height: "45px",
                fontSize: "18px",
                borderColor: "rgb(8, 2, 2)",
              }}
            />
          </div>
          <div className="pt-4">
            <button
              className="btn text-white d-flex align-items-center"
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

export default EditContact;
