import React from "react";
import { Container } from "../components/Grid";
import SignUpForm from "../components/SignUpForm";
import API from "../utils/API";
// import axios from "axios";

function SignUp() {

  function handleSubmit(event) {
    const user = event.target.value;
    console.log(user);

    API.registerUser(user)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
  }

    // const signUp = e.target;
    // user = {
    //   firstName: signUp[0].value,
    //   lastName: signUp[1].value,
    //   email: signUp[2].value,
    //   password: signUp[3].value,
    // };

    // function registerUser(user) {
    //   console.log(user);
    //   API.registerUser(user)
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err));
    // }
  

  return (
    <Container fluid>
      <SignUpForm handleSubmit={handleSubmit}/>
    </Container>
  );
  }

export default SignUp;
