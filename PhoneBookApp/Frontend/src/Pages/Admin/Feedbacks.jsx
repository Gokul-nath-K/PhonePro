import React, { useEffect, useState } from "react";
import { UserService } from "../../Services/UserService";

const Feedbacks = () => {
  const [feedbacks, setFeedback] = useState();

  const fetchData = async () => {
    const response = await UserService.getFeedback().then();
    
    setFeedback(response)
  }
  useEffect(() => {
    
    fetchData();
  }, []);

  console.log(feedbacks);
  return (
    <>
      {feedbacks &&
        feedbacks.map((feedback) => {
          return (
            <>
              <div className="card mb-4" style={{ width: "60%" }}>
                <div className="card-body">
                  <h5 className="card-title">{ feedback.name } </h5>
                  <h6 className="card-subtitle mb-3 text-muted">{ feedback.date}</h6>
                  <p className="card-text">
                    { feedback.message}
                  </p>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Feedbacks;
