import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={props.handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={props.handleSubmit}
        >
          Log In
        </button>
      </form>
    </nav>
  );
}

export default LoginForm;
