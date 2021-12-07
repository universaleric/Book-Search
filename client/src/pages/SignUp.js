import React, { useState } from "react";
import { Container } from "../components/Grid";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function handleFirstChange(event) {
    const first = event.target.value;
    setFirst(first);
    console.log(first);
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

  const handleInSubmit = (event) => {
    event.preventDefault();
    console.log(first);
    console.log(last);
    console.log(email);
    console.log(password);
    console.log(confirm);
  };

  return (
    <Container fluid>
      <SignUpForm
        handleFirstChange={handleFirstChange}
        handleLastChange={handleLastChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleConfirmChange={handleConfirmChange}
        handleSubmit={handleInSubmit}
      />
    </Container>
  );
}

export default SignUp;
