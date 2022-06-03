import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import {
  signInWithEmailAndPassword
} from "firebase/auth";
import { Container } from "../components/Grid";
import LoginForm from "../components/LoginForm";
import { auth } from "../../src/firebase-config";
import API from "../utils/API";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = async (event) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      let uid = user.user.uid;
      console.log(user);
      console.log(uid);
      console.log("login successful");
      getUser(uid);
    } catch (error) {
      console.log(error.message);
    }
  };

  function getUser() {
    API.getUser()
      .then((res) => {
        // let user = res.data;
        // console.log(res.data);
        // console.log(user.firstName);
      })
      .then(history.push("/search"))
      .catch((err) => console.log(err));
  }

  function handleEmailChange(event) {
    const email = event.target.value;
    setEmail(email);
    // console.log(email);
  }

  function handlePasswordChange(event) {
    const password = event.target.value;
    setPassword(password);
    // console.log(password);
  }

  return (
    <Container fluid>
      <LoginForm
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        login={login}
      />
    </Container>
  );
}

export default Login;
