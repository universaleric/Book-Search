import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm(props) {
  return (
    <nav className="navbar navbar-light">
      <form>
        <div className="form-group">
          <label for="email">Email address</label>
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
    </nav>
  );
}

export default LoginForm;
