document.addEventListener("DOMContentLoaded", (event) => {
  const logoutButton = document.getElementById("logoutButton");

  logoutButton.addEventListener("click", function (event) {
    fetch("/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        window.location.href = data.redirectUrl;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
