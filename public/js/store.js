document.querySelectorAll(".purchase-btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const itemId = event.target.dataset.itemId;
    purchase(itemId);
  });
});

function purchase(itemId) {
  // Your purchase logic here
  // For example, you could make an AJAX request to your server to purchase the item
  fetch(`/api/purchase/${itemId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Purchase successful!");
      } else {
        alert("Purchase failed: " + data.error);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
