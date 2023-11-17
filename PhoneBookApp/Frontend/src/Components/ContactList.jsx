import { InfoCircleFill, PencilSquare, Trash3Fill } from "react-bootstrap-icons";
// import { contacts } from "../Assets/Contexts/Contacts";
import { useCallback, useEffect, useState } from "react";

import { ContactService } from "../Services/ContactService";
import { useDispatch } from "react-redux";
import { editContact } from "../Assets/Slices/ContactSlice";
import { useNavigate } from "react-router-dom";

const ContactList = () => {
  const array = Array.from({ length: 26 }, (value, index) => index + 1);
  const [style, setStyle] = useState({ display: "none" });
  const [isHovering, setIsHovering] = useState(-1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMouseEnter = (i) => {
    setIsHovering(i);
  };

  const handleMouseLeave = () => {
    setIsHovering(-1);
  };

  const [contacts, setContacts] = useState([]);

  const fetchContacts = useCallback(async () => {
    try {
      const response = await ContactService.getAllContacts();
      setContacts(response);
    } catch (err) {
      setStyle(style);
    }
  }, [style]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const handleEdit = (contact) => {
    let editedContact = contacts[contacts.indexOf(contact)];

    dispatch(
      editContact({
        editedContact: editedContact,
      })
    );
    navigate("editcontact");
  };

  const showContactInfo = (contact) => {
    let editedContact = contacts[contacts.indexOf(contact)];

    dispatch(
      editContact({
        editedContact: editedContact,
      })
    );
    navigate("info");
  };
  const handleDelete = async (id) => {
    try {
      await ContactService.deleteContact(id).then(() => fetchContacts());
    } catch (err) {}
  };
  return (
    <>
      <div
        className="contact-list"
        style={{ paddingRight: "4%", position: "relative", height: "80vh", overflow: "hidden" }}
      >
        <div className="row ">
          <h3 className="py-2 px-4" style={{color: "rgb(8, 2, 2, 0.8)"}}>All contacts</h3>
        </div>
        <div className="row" style={{ height: "100vh" }}>
          <div className="col overflow-y-auto mx-3" style={{ height: "100%" }}>
            {array &&
              array.map((num) => {
                let firstletter = String.fromCharCode(64 + num).toLowerCase();
                return (
                  <div key={num}>
                    <div
                      className="row bg-transparent py-1 mt-3 mb-3"
                      style={{borderColor: "rgb(8, 2, 2)", borderBottom: "solid 1px rgb(8, 2, 2)"}}
                      id={firstletter}
                    >
                      <div className="col">
                        <p className="pt-2 fw-bold fs-3" style={{color: "rgb(8, 2, 2, 0.8)"}}>
                          {firstletter.toUpperCase()}
                        </p>
                      </div>
                    </div>
                    {contacts &&
                      contacts
                        .filter(
                          (contact) =>
                            contact.name.slice(0, 1).toLowerCase() ===
                            firstletter
                        )
                        .map((contact) => {
                          return (
                            <div key={contact.id}>
                              <div
                                className="row bg-transparent pt-2 pb-2"
                                onMouseEnter={() =>
                                  handleMouseEnter(contact.id)
                                }
                                onMouseLeave={handleMouseLeave}
                              >
                                <div className="col-1 pt-1">
                                  <button
                                    type="button"
                                    className="btn fs-5"
                                    disabled
                                    style={{ backgroundColor: "rgb(241, 212, 229)", maxHeight: "50px", minWidth: "40px"}}
                                  >
                                    <p style={{color: "rgb(8, 2, 2)"}} >
                                    {contact.name.slice(0, 1)}
                                    </p>
                                  </button>
                                </div>
                                <div className="col pt-1">
                                  <p className="pt-2" style={{color: "rgb(8, 2, 2)"}}>
                                    {contact.name}
                                  </p>
                                </div>
                                <div className="col-1 pt-1">
                                  <button
                                    type="button"
                                    className="btn rounded fs-5"
                                    style={
                                      isHovering === contact.id
                                        ? { display: "block", color:"rgb(8, 2, 2)", backgroundColor: "rgb(241, 212, 229)" }
                                        : style
                                    }
                                    onClick={() => showContactInfo(contact)}
                                  >
                                    <InfoCircleFill />
                                  </button>
                                </div>
                                <div className="col-1 pt-1">
                                  <button
                                    type="button"
                                    className="btn rounded fs-5"
                                    style={
                                      isHovering === contact.id
                                        ? { display: "block", color:"rgb(8, 2, 2)", backgroundColor: "rgb(241, 212, 229)" }
                                        : style
                                    }
                                    onClick={() => handleEdit(contact)}
                                  >
                                    <PencilSquare />
                                  </button>
                                </div>
                                <div className="col-1 pt-1">
                                  <button
                                    type="button"
                                    className="btn rounded fs-5"
                                    style={
                                      isHovering === contact.id
                                        ? { display: "block", color:"rgb(8, 2, 2)", backgroundColor: "rgb(241, 212, 229)" }
                                        : style
                                    }
                                    onClick={() => handleDelete(contact.id)}
                                  >
                                    <Trash3Fill />
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
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
              {array &&
                array.map((num) => {
                  let firstletter = String.fromCharCode(64 + num).toLowerCase();
                  return (
                    <a
                      key={num}
                      href={"#" + firstletter}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <button className="btn bg-transparent">
                        <li className="list-group-item bg-transparent text-light border-0 fs-6">
                          {String.fromCharCode(64 + num)}
                        </li>
                      </button>
                    </a>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactList;
