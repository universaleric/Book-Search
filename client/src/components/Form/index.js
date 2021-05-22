import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Form(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2 mt-10"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={props.handleInputChange}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={props.handleSubmit}
        >
          Search
        </button>
      </form>
    </nav>
  );
}

export default Form;
