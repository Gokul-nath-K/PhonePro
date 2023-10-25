import React from "react";
import { BackspaceFill, CaretLeftFill } from "react-bootstrap-icons";

const Info = () => {
  return (
    <>
      <div
        className="container"
        style={{
            paddingTop: "4%",
          width: "80%",
          paddingRight: "4%",
          position: "relative",
          height: "80vh",
          overflow: "hidden",
        }}
      >
        <div className="card">
            <div style={{position: "absolute", width: "100%", height: "7%", backgroundColor: "rgba(0,0,0,0.6)"}}>
                <div style={{height: "100%", width:"20%", margin: "1%"}}>
                    <CaretLeftFill size={20} color="white"/>
                </div>
            </div>
            <img
              src={require("../../Assets/Images/contact1.jpg")}
              style={{ width: "100%" , height:  "100%" }}
              className="rounded-circle"
            />
          <div className="card-body">
            <div className="card-title">
              <h5>Name</h5>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Phone no</li>
            <li class="list-group-item">Email</li>
            <li class="list-group-item">Group</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Info;
