document.querySelectorAll(".purchase-btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const itemId = event.target.dataset.itemId;
    purchase(itemId);
  });
});

function purchase(itemId) {
  makePurchase(itemId)
    .then((data) => {
      if (data.success) {
        // Handle success
      } else {
        // Handle failure
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function makePurchase(itemId) {
  return fetch(`/api/purchase/${itemId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // adds cookies
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    });
}