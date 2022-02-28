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
      <h4>Log in here!</h4>
        <form className="loginForm">
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
          <button
            type="submit"
            className="btn btn-primary"
            onClick={props.login}
          >
            Log In
          </button>
        </form>
        <span className="register">
          Don't have an account? <a className="signupLink" href="/signup">Sign Up</a>
        </span>
      </div>
    </div>
  );
}

export default LoginForm;
