document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-form-container form");

  loginForm.addEventListener("submit", function (event) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
      alert("Both fields are required!");
      event.preventDefault();
    }
  });
});
