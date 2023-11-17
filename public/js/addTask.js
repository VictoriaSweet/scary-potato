document.addEventListener("DOMContentLoaded", () => {
  const taskCategory = document.getElementById("taskCategory");
  const titleInput = document.getElementById("titleInput");

  if (taskCategory) {
    taskCategory.addEventListener("change", function () {
      titleInput.value = this.value;
    });
  }

  if (titleInput) {
    titleInput.addEventListener("click", function () {
      this.placeholder = "";
    });
  }
});
