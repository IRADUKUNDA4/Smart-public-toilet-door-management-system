document.getElementById("toggleLink").addEventListener("click", toggleForm);
document.getElementById("loginForm").addEventListener("submit", loginUser);
document.getElementById("signupForm").addEventListener("submit", signupUser);

const apiURL = 'https://ds-ecommerce.onrender.com'; // Replace with your actual API endpoint

function toggleForm() {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const formTitle = document.getElementById("formTitle");
  const toggleLink = document.getElementById("toggleLink");

  if (signupForm.style.display === "none") {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    formTitle.innerText = "Signup";
    toggleLink.innerHTML = 'Already have an account? <a href="#">Login</a>';
  } else {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    formTitle.innerText = "Login";
    toggleLink.innerHTML = 'Don\'t have an account? <a href="#">Sign Up</a>';
  }
}

// Login User Function
async function loginUser(event) {
//   event.preventDefault();

//   const email = document.getElementById("loginEmail").value;
//   const password = document.getElementById("loginPassword").value;

//   // Validate email and password
//   if (!validateEmail(email) || !validatePassword(password)) {
//     displayMessage("errorMessage", "Please enter valid credentials.");
//     return;
//   }

//   try {
//     const response = await fetch(`${apiURL}/login`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password })
//     });
//     const data = await response.json();

// //     if (response.ok) {
// //       displayMessage("successMessage", "Login successful!");
// //       setTimeout(() => {
// //         window.location.href = 'index.html';  // Navigate to index.html after successful login
// //       }, 1000);  // 1-second delay for UX improvement
// //     } else {
// //       displayMessage("errorMessage", data.message || "Login failed.");
// //     }
// //   } catch (error) {
// //     displayMessage("errorMessage", "An error occurred. Please try again.");
// //   }
// // }

// // Signup User Function
// async function signupUser(event) {
//   event.preventDefault();

//   const email = document.getElementById("signupEmail").value;
//   const password = document.getElementById("signupPassword").value;
//   const confirmPassword = document.getElementById("confirmPassword").value;

//   if (!validateEmail(email) || !validatePassword(password) || password !== confirmPassword) {
//     displayMessage("errorMessage", "Please check your input and try again.");
//     return;
//   }

//   try {
//     const response = await fetch(`${apiURL}/registerUser`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password })
//     });
//     const data = await response.json();

//     if (response.ok) {
//       displayMessage("successMessage", "Signup successful! Please log in.");
//       toggleForm(); // Switch back to login form
//     } else {
//       displayMessage("errorMessage", data.message || "Signup failed.");
//     }
//   } catch (error) {
//     displayMessage("errorMessage", "An error occurred. Please try again.");
//   }
// }

// // Validate Email Function
// function validateEmail(email) {
//   const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
//   return re.test(String(email).toLowerCase());
// }

// // Validate Password Function (Minimum 6 characters)
// function validatePassword(password) {
//   return password.length >= 6;
// }

// // Display Message Function
// function displayMessage(elementId, message) {
//   document.getElementById("errorMessage").innerText = "";
//   document.getElementById("successMessage").innerText = "";
//   document.getElementById(elementId).innerText = message;
// }
