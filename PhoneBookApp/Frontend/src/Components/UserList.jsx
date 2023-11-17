import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { UserService } from "../Services/UserService";

const UserList = () => {
  const [userlist, setUserlist] = useState([]);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await UserService.getByRole("USER");
      setUserlist(response);
    } catch (err) {
      
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div className="table-container" style={{ width: "93%" }}>
        <div className="row">
          <table className="table table-hover ">
            <thead>
              <tr>
                <th> Username</th>
                <th> Email</th>
                <th> Phone number</th>
                <th> Date of birth</th>
                {/* <th className="d-flex justify-content-center"> Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {userlist &&
                userlist.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td> {user.name} </td>
                      <td> {user.email}</td>
                      <td> {user.phoneno}</td>
                      <td> {user.dob}</td>
                      {/* <td className="d-flex justify-content-center">
                        <button
                          style={{
                            marginLeft: "10px",
                            backgroundColor: "#005A9C",
                            color: "white",
                          }}
                          onClick={() => {}}
                          className="btn"
                        >
                          View{" "}
                        </button> */}
                        {/* <button
                                  style={{ marginLeft: "10px" }}
                                  onClick={() => {}}
                                  className="btn btn-danger"
                                >
                                  Delete{" "}
                                </button> */}
                      {/* </td> */}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;
