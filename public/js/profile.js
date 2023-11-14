document.querySelector("form").addEventListener("submit", function (event) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "") {
    alert("Please enter your username");
    event.preventDefault(); // Prevent form submission
  }

  if (password === "") {
    alert("Please enter your password");
    event.preventDefault(); // Prevent form submission
  }
});
