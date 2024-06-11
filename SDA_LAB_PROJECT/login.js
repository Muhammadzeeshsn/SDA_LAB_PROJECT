// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// Use the same version for both

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEdHVq_8RKh_kuEykqkBXZToT7_vlsXAA",
  authDomain: "sda-lab-project.firebaseapp.com",
  projectId: "sda-lab-project",
  storageBucket: "sda-lab-project.appspot.com",
  messagingSenderId: "772855049111",
  appId: "1:772855049111:web:24c4e35ebf9e64541b72d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Ensure auth is initialized after app

// SUBMIT BUTTON
const submit = document.getElementById('submit');
submit.addEventListener("click", function(event) {
  event.preventDefault();

  // INPUTS
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  

  console.log("Email:", email);
  console.log("Password:", password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Please Wait...");
      window.location.href = "home.html";
      console.log("Account created:", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error : " + errorMessage);
      console.error("Error:", errorCode, errorMessage);
    });
});
