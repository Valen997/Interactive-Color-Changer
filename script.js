document.addEventListener("DOMContentLoaded", function () {
    const colorBox = document.getElementById("color-box");
    const changeColorButton = document.getElementById("change-color-button");

    // Function to generate a random color
    function getRandomColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    // Check if elements exist before adding event listeners
    if (colorBox && changeColorButton) {
      changeColorButton.addEventListener("click", function () {
        colorBox.style.backgroundColor = getRandomColor();
      });
    }
});
