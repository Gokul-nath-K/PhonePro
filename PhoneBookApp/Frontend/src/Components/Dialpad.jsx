import React, { useState } from "react";
import { BackspaceFill, PersonCircle, TelephoneFill } from "react-bootstrap-icons";

const Dialpad = () => {

  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    setNumber(e.target.value);
  }
  return (
    <>
      <div className="container-fluid d-table-cell align-middle">
        <div className="d-flex justify-content-center my-4">
        <PersonCircle color="rgb(8, 2, 2, 0.8)" size={75}/>
        </div>
      <input type="text" className="form-controt py-4 px-4 my-3 rounded-4 w-100" onChange={handleChange} value={number} style={{fontSize : "25px", backgroundColor:"rgb(241, 212, 229)"}} placeholder=""/>
        <div className="table-responsive rounded-4 shadow-sm" style={{ backgroundColor:"rgb(241, 212, 229)"}}>
          <table className="table align-middle table-borderless text-lg-center " style={{ backgroundColor:"rgb(241, 212, 229)"}}>
            <tbody className="">
              <tr >
                <td style={{ backgroundColor:"rgb(241, 212, 229)"}} className="table-data" onClick={() => setNumber(number + "1")}>1</td>
                <td style={{ backgroundColor:"rgb(241, 212, 229)"}} className="table-data" onClick={() => setNumber(number + "2")}>2</td>
                <td style={{ backgroundColor:"rgb(241, 212, 229)"}} className="table-data" onClick={() => setNumber(number + "3")}>3</td>
              </tr>
              <tr>
                <td style={{ backgroundColor:"rgb(241, 212, 229)"}} className="table-data" onClick={() => setNumber(number + "4")}>4</td>
                <td style={{ backgroundColor:"rgb(241, 212, 229)"}} className="table-data" onClick={() => setNumber(number + "5")}>5</td>
                <td style={{ backgroundColor:"rgb(241, 212, 229)"}} className="table-data" onClick={() => setNumber(number + "6")}>6</td>
              </tr>
              <tr>
                <td style={{ backgroundColor:"rgb(241, 212, 229)"}} className="table-data" onClick={() => setNumber(number + "7")} >7</td>
                <td style={{ backgroundColor:"rgb(241, 212, 229)"}} className="table-data" onClick={() => setNumber(number + "8")} >8</td>
                <td style={{ backgroundColor:"rgb(241, 212, 229)"}} className="table-data" onClick={() => setNumber(number + "9")} >9</td>
              </tr>
              <tr>
                <td style={{ backgroundColor:"rgb(241, 212, 229)"}} className="table-data" onClick={() => setNumber(number + "*")} >*</td>
                <td style={{ backgroundColor:"rgb(241, 212, 229)"}} className="table-data" onClick={() => setNumber(number + "0")} >0</td>
                <td style={{ backgroundColor:"rgb(241, 212, 229)"}} className="table-data" onClick={() => setNumber(number + "#")} >#</td>
              </tr>
              <tr>
                <td style={{ backgroundColor:"rgb(241, 212, 229)"}} className="table-data"  ></td>
                <td style={{ backgroundColor:"rgb(241, 212, 229)"}} className="table-data"  > <TelephoneFill size={25} /> </td>
                <td style={{ backgroundColor:"rgb(241, 212, 229)"}} className="table-data" onClick={() => setNumber(number.substring(0, number.length - 1))}  > <BackspaceFill size={25} /> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dialpad;
