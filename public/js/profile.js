document.querySelector("form").addEventListener("submit", function (event) {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  let formValid = true;

  if (username === "") {
    alert("Please enter your username");
    formValid = false;
  }

  if (password === "") {
    alert("Please enter your password");
    formValid = false;
  }

  if (!formValid) {
    event.preventDefault(); // Prevent form submission
  }
});
