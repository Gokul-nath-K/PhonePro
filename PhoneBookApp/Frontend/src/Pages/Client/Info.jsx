import React, { useEffect, useState } from "react";
import { BackspaceFill, CaretLeftFill } from "react-bootstrap-icons";
import { getEditedContacts } from "../../Assets/Slices/ContactSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Info = () => {

  const navigate = useNavigate();
  let editedContact = useSelector(getEditedContacts);

  const [contact, setContact] = useState({});

  useEffect(() => {

    console.log(editedContact);
    if (Object.keys(editedContact).length === 0) {
      navigate(-1);
    } else {
      setContact({
        id: editedContact.id,
        name: editedContact.name,
        phoneno: editedContact.phoneno,
        email: editedContact.email,
        groupname: editedContact.groupname,
      });
    }
  }, [editedContact, navigate]);
  
  console.log(contact);
  
  return (
    <>
      <div
        className="container"
        style={{
            paddingTop: "4%",
          width: "45%",
          paddingRight: "4%",
          position: "relative",
          height: "80vh",
          overflow: "hidden",
        }}
        >
        <div className="card">
            <div style={{position: "absolute", width: "100%", height: "6%", backgroundColor: "rgba(0,0,0,0.1)"}}>
                <div style={{height: "100%", width:"20%", margin: "1%"}} onClick={() => navigate(-1)}>
                    <CaretLeftFill size={20} color="white"/>
                </div>
            </div>
            <img
              src={require("../../Assets/Images/user.png")}
              style={{ width: "100%"  }}
              className=""
            />
          <div className="card-body">
            <div className="card-title  d-flex justify-content-center">
              <h5><b>{contact.name}</b></h5>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-center p-2"><b>{contact.phoneno}</b></li>
            <li className="list-group-item d-flex justify-content-center p-2"><b>{contact.email}</b></li>
            <li className="list-group-item d-flex justify-content-center p-2"><b>{contact.groupname ? contact.groupname : "Default group" }</b></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Info;
