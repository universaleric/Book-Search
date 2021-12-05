import React, { useState } from "react";
import { Container } from "../components/Grid";
import SignUpForm from "../components/SignUpForm";



function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <Container fluid>
      <SignUpForm
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleInSubmit}
      />
    </Container>
  );
}

export default SignUp;