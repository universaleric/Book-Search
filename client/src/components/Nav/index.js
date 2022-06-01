import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import API from "../../utils/API";
import "./style.css";

function Nav() {
  const [click, setClick] = useState(false);
  // const [userData, setUserData] = useState({});
  const [user, setUser] = useState({});
  const [capitalizedName, setCapitalizedName] = useState("");
  // console.log(userData.firstName);

  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("AuthState has changed.");
        setUser(currentUser);
        loadUser();
        // name();
      } else {
        console.log("AuthState has changed.");
        setUser(false);
        setCapitalizedName("");
      }
    });
    function loadUser() {
      API.getUser()
        .then((res) => {
          setUser(true);
          // setUserData(res.data);
          const originalName = res.data.firstName;
          setCapitalizedName(originalName.charAt(0).toUpperCase() + originalName.slice(1));
        })
        .catch((err) => console.log(err));
    }
    // function name(){
    //   const originalName = userData.firstName;
    //   setCapitalizedName(originalName.firstName.charAt(0).toUpperCase() + originalName.slice(1));
    // }
  }, []);

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
      {user ? <p className="welcome">Welcome, {capitalizedName}!</p> : ""}
    </nav>
  );
}

export default Nav;
