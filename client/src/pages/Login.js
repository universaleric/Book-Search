import React, { useState } from "react";
import { Container } from "../components/Grid";
import LoginForm from "../components/LoginForm";

// const loginFormHandler = async (event) => {
//     event.preventDefault();

//     // Collect values from the login form
//     const email = document.querySelector('#email-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();

//     if (email && password) {
//       // Send a POST request to the API endpoint
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.ok) {
//         // If successful, redirect the browser to the profile page
//         document.location.replace('/profile');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };

//   const signupFormHandler = async (event) => {
//     event.preventDefault();

//     const first_name = document.querySelector('#first-name-signup').value.trim();
//     const last_name = document.querySelector('#last-name-signup').value.trim();
//     const email = document.querySelector('#email-signup').value.trim();
//     const username = document.querySelector('#username-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();

//     if (first_name && last_name && username && email && password) {
//       const response = await fetch('/api/users', {
//         method: 'POST',
//         body: JSON.stringify({
//           first_name,
//           last_name,
//           email,
//           username,
//           password,
//         }),
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };

//   document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginFormHandler);

//   document
//     .querySelector('.signup-form')
//     .addEventListener('submit', signupFormHandler);

function Login() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <Container fluid>
      <LoginForm
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default Login;
