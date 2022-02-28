import React, { useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../src/firebase-config";
import API from "../../utils/API";
import "./style.css";

function Nav() {
  const [click, setClick] = useState(false);
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    loadUser();
  });

  function loadUser() {
    API.getUser(user.uid)
      .then((res) => {
        setUserData(res.data);
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
      {user ? <h8 className="welcome">Welcome, {userData?.first}!</h8> : ""}
    </nav>
  );
}

export default Nav;
