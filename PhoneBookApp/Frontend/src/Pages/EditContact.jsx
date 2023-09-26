import React from 'react'
import store from '../Assets/Redux/Store'

function EditContact() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
        {/* <p style={{color : "white"}}>Edit contact page...</p> */}
        {/* <p style={{color : "white"}}> {store.getState().email } </p> */}
        <div className="container-fluid pt-4" style={{ maxWidth : "80%", paddingRight : "5%"}}>
        <h3 className="py-3 text-light">Edit Contact</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group pb-4">
          {/* <label className="text-white y-3 bg-secondary p-2 pb-3">Name</label> */}
          <input
          style={{color : "white"}}
            type="text"
            className="add-con-input bg-secondary my-3 form-control"
            id="exampleInputEmail1"
            placeholder="Enter Name"
            defaultValue="Gokul"
            />
        </div>
        <div className="form-group pb-4">
          {/* <label className="text-white y-3 bg-secondary p-2 pb-3">Mobile number</label> */}
          <input
          style={{color : "white"}}
            type="number"
            className="add-con-input bg-secondary my-3 form-control"
            id="exampleInputPassword1"
            placeholder="Mobile number"
            defaultValue="987654321"
            />
        </div>
        <div className="form-group pb-4">
          {/* <label className="text-white y-3 bg-secondary p-2 pb-3">Email address</label> */}
          <input
          style={{color : "white"}}
            type="email"
            className="add-con-input bg-secondary my-3 form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            defaultValue="gokul@gmail.com"
            />
        </div>
        <div className="form-group pb-4">
          {/* <label className="text-white y-3 bg-secondary p-2 pb-3">Group</label> */}
          <input
          style={{color : "white"}}
            type=""text
            className="add-con-input bg-secondary my-3 form-control"
            id="exampleInputEmail1"
            placeholder="Enter group name"
            defaultValue=""
            />
        </div>
        <div className="pt-4">
        <button className="btn btn-primary d-flex align-items-center">
          Submit
        </button>
        </div>
      </form>
            </div>
    </>
  )
}

export default EditContact