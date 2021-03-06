import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "../components/Grid";
import SignUpForm from "../components/SignUpForm";
import API from "../utils/API";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/firebase-config";
import { getAuth } from "firebase/auth";

function SignUp() {
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const history = useHistory();

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
    const userData = { uid, firstName, lastName };
    console.log(uid);
    console.log(firstName);
    console.log(lastName);
    API.saveUser(userData)
      .then((res) => console.log(res))
      .then(history.push("/login"))
      .catch((err) => console.log(err));
  }

  function handleFirstChange(event) {
    const firstName = event.target.value;
    setFirst(firstName);
    // console.log(first);
  }

  function handleLastChange(event) {
    const lastName = event.target.value;
    setLast(lastName);
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
