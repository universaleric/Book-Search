import React, { useState } from "react";
import { Container } from "../components/Grid";
import SignUpForm from "../components/SignUpForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/firebase-config";

function SignUp() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const register = async () => {
    try {
      if(confirm === password){
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    }else{alert("Passwords do not match.")}} catch (error) {
      console.log(error.message);
    }
  };

  function handleFirstChange(event) {
    const first = event.target.value;
    console.log(first);
    setFirst(first);
  }

  function handleLastChange(event) {
    const last = event.target.value;
    setLast(last);
    console.log(last);
  }

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

  function handleConfirmChange(event) {
    const confirm = event.target.value;
    setConfirm(confirm);
    console.log(confirm);
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
