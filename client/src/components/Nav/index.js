import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import API from "../../utils/API";
import "./style.css";

function Nav() {
  const [click, setClick] = useState(false);
  const [user, setUser] = useState({});
  const [capitalizedName, setCapitalizedName] = useState("");
  // console.log(capitalizedName);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("AuthState has changed.");
        setUser(currentUser);
        console.log(currentUser);
        console.log(currentUser.uid);
        API.getUser(currentUser.uid)
          .then((res) => {
            const originalName = res.data.firstName;
            setCapitalizedName(
              originalName.charAt(0).toUpperCase() + originalName.slice(1)
            );
            setUser(true);
          })
          .catch((err) => console.log(err));
      } else {
        console.log("AuthState has changed.");
        setUser(false);
        setCapitalizedName("");
      }
    });
  }, []);

  const logout = async () => {
    // event.preventDefault();
    await signOut(auth)
      .then(() => {
        console.log("logout successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
        <li style={{ display: user ? null : "none" }} className="nav-item">
          <Link to="/saved" className="nav-links" onClick={closeMobileMenu}>
            Saved
          </Link>
        </li>
        <li style={{ display: user ? "none" : null }} className="nav-item">
          <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
            Log In
          </Link>
        </li>
        <li style={{ display: user ? null : "none" }} className="nav-item">
          <Link
            to="/login"
            className="nav-links"
            onClick={() => {
              logout();
              closeMobileMenu();
            }}
          >
            Log Out
          </Link>
        </li>
      </ul>
      {user ? <p className="welcome">Welcome, {capitalizedName}!</p> : ""}
    </nav>
  );
}

export default Nav;
