import React from "react";
import "./style.css";
import book from "../../assets/books.png";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm(props) {
  return (
    <div className="loginRow row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src={book} className="books img-fluid" alt="Responsive" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form className="loginForm">
          <div className="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={props.handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={props.handlePasswordChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={props.handleInSubmit}
          >
            Log In
          </button>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={props.handleUpSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
