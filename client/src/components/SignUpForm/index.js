import React from "react";
import "./style.css";
import book from "../../assets/books.png";
import "bootstrap/dist/css/bootstrap.min.css";

function SignUpForm(props) {
  return (
    <div className="loginRow row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src={book} className="books img-fluid" alt="Responsive" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <h4>Create an account!</h4>
        <form className="loginForm">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="first"
              placeholder="First Name"
              onChange={props.handleFirstChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="last"
              placeholder="Last Name"
              onChange={props.handleLastChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Email Address"
              onChange={props.handleEmailChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={props.handlePasswordChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="confirm password"
              placeholder="Confirm Password"
              onChange={props.handleConfirmChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={props.register}
          >
            Sign Up
          </button>
        </form>
        <span className="register">
          Already have an account? <a className="loginLink" href="/login">Log In</a>
        </span>
      </div>
    </div>
  );
}

export default SignUpForm;
