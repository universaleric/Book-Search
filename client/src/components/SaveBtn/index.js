import React from "react";
import "./style.css";

function SaveBtn(props) {
  return (
    <span className="btn btn-primary" {...props} role="button" tabIndex="0">
      Save
    </span>
  );
}

export default SaveBtn;
