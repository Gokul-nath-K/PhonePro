import React, { useState } from "react";
import { UserService } from "../../Services/UserService";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState("Send");
  const [feedback, setFeedback] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.id]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    
    setFeedback({ ...feedback, date : new Date().toJSON()});

    const response = UserService.postFeedback(feedback).then(() => navigate(-1));

  };
  return (
    <>
      <div
        className=""
        style={{ height: "100%", backgroundColor: "rgb(252, 233, 241)" }}
      >
        {/* <div className="contact-image"></div> */}
        <div
          className="container-fluid h-100 position-absolute top-0"
          style={{ backgroundColor: "rgb(252, 233, 241)" }}
        >
          <div
            className="row position-aboslute"
            style={{
              marginTop: "7%",
              paddingLeft: "5%",
              paddingRight: "5%",
              backgroundColor: "rgb(252, 233, 241)",
            }}
          >
            {/* <div className="col"></div> */}
            <div className="col" style={{ paddingLeft: "25%" }}>
              <div
                className="card border-dark py-4 "
                style={{ maxWidth: "60%" }}
              >
                <div className="card-body">
                  <div className="card-title">
                    <div className="row">
                      <div className="col"></div>
                      <div className="col d-flex justify-content-center">
                        <h3 className="mb-4">Contact us</h3>
                      </div>
                      <div className="col"></div>
                    </div>
                  </div>
                  <div className="card-text text-dark px-4">
                    <form onSubmit={onSubmit}>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                          Name
                        </label>
                        <input
                        onChange={handleChange}
                          className="form-control"
                          type="text"
                          id="name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                        onChange={handleChange}
                          className="form-control"
                          type="email"
                          id="email"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="phno">
                          Phone number
                        </label>
                        <input
                        onChange={handleChange}
                          className="form-control"
                          type="number"
                          id="phoneno"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          onChange={handleChange}
                          className="form-control"
                          id="message"
                          required
                        />
                      </div>
                      <button className="btn btn-danger" type="submit">
                        {formStatus}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactForm;
