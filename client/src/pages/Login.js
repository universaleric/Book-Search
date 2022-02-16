import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Container } from "../components/Grid";
import LoginForm from "../components/LoginForm";
import { auth } from "../../src/firebase-config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  function handleEmailChange(event) {
    const email = event.target.value;
    setEmail(email);
    console.log(email);
  }

  function handlePasswordChange(event) {
    const password = event.target.value;
    setPassword(password);
    console.log(password);
  }

  const handleInSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <Container fluid>
      <LoginForm
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleInSubmit}
      />
    </Container>
  );
}

export default Login;
