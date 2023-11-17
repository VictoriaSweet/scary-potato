document.addEventListener("DOMContentLoaded", () => {
  const signUpForm = document.querySelector(".signUp-container form");

  signUpForm.addEventListener("submit", function (event) {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!username || !email || !password) {
      alert("All fields are required!");
      event.preventDefault();
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters long!");
      event.preventDefault();
    }
  });
});
