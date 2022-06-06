import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import {
  signInWithEmailAndPassword
} from "firebase/auth";
import { Container } from "../components/Grid";
import LoginForm from "../components/LoginForm";
import { auth } from "../../src/firebase-config";

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
      history.push("/search")
    } catch (error) {
      console.log(error.message);
    }
  };

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
