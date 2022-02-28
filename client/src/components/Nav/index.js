import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "./style.css";

function Nav() {
  const [click, setClick] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    loadUser();
  }, []);

  function loadUser() {
    API.getUser()
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        Google Books Search
      </a>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/saved" className="nav-links" onClick={closeMobileMenu}>
            Saved
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
            Login
          </Link>
        </li>
      </ul>
      {user ? <h8 className="welcome">Welcome, {user?.first}!</h8> : ""}
    </nav>
  );
}

export default Nav;
