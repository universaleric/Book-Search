import React, { useState } from "react";
import { Container } from "../components/Grid";
import SignUpForm from "../components/SignUpForm";
import API from "../utils/API";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/firebase-config";
import { getAuth } from "firebase/auth";

function SignUp() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const register = async (event) => {
    event.preventDefault();
    try {
      if (confirm === password) {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(user);
      } else {
        alert("Passwords do not match.");
      }
    } catch (error) {
      console.log(error.message);
    }
    saveUser();
  };

  function saveUser() {
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;
    const userData = { first, last, uid };
    console.log(first);
    console.log(last);
    console.log(uid);
    API.saveUser(userData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function handleFirstChange(event) {
    const first = event.target.value;
    // console.log(first);
    setFirst(first);
  }

  function handleLastChange(event) {
    const last = event.target.value;
    setLast(last);
    // console.log(last);
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

  function handleConfirmChange(event) {
    const confirm = event.target.value;
    setConfirm(confirm);
    // console.log(confirm);
  }

  return (
    <Container fluid>
      <SignUpForm
        handleFirstChange={handleFirstChange}
        handleLastChange={handleLastChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleConfirmChange={handleConfirmChange}
        register={register}
      />
    </Container>
  );
}

export default SignUp;
