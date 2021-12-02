import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={props.handleInputChange}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={props.handleSubmit}
        >
          Log In
        </button>
      </form>
    </nav>
  );
}

export default Login;
