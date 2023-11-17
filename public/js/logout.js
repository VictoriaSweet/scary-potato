document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logoutButton");
  
  if (logoutButton) {
  

    logoutButton.addEventListener("click", function () {
      fetch("/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // adds cookies
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          window.location.href = data.redirectUrl || '/default-redirect-url'; // redirect to default url
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }
});
