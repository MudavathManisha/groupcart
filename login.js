// js/login.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Dummy login simulation
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;

    // ✅ Simple validation (in real world, you'd connect Firebase/Auth API)
    if (email && password) {
      // Store login session in localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);

      // Redirect to index.html
      window.location.href = "index.html";
    } else {
      alert("Please enter valid login credentials.");
    }
  });
});
