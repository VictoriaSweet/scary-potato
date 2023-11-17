document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  if (form && usernameInput && passwordInput) { // if form exists and username and password are not empty
    form.addEventListener("submit", function (event) {
      const username = usernameInput.value;
      const password = passwordInput.value;
      let formValid = true;

      if (username.trim() === "") {
        // if username is empty
        //show error on page
        formValid = false; // form is not valid
      }

      if (password.trim() === "") {
        // if password is empty
        //show error on page
        formValid = false; // form is not valid
      }

      if (!formValid) {
        // if form is not valid
        event.preventDefault(); // Prevent form submission
      }
    });
  }
});
