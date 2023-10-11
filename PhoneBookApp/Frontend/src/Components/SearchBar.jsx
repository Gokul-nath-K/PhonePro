import React from "react";
import { Search } from "react-bootstrap-icons";

function SearchBar(props) {
  return (
    <>
      <div className="form-group row">
        <div className="input-group col-md-12 col-sm-12 col-lg-12">
          <input
            type="text"
            className="form-control input-group-lg search-input"
            onChange={props.handleChange}
            aria-describedby="searchHelp"
            placeholder="Search"
            style={{ color: "rgb(8, 2, 2)", height: "45px", fontSize: "18px", borderColor: "rgb(8, 2, 2)" }}

          />
          <button
            type="button"
            className="btn"
            style={{
              background:
                "linear-gradient( 58deg, rgb(8, 2, 2, 0.8), rgb(8, 2, 2)",
              fontSize: "20px",
            }}
          >
            <Search color="white" size={20} />
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
