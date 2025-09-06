// Wait for page to load
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("myRange");
  const flagImage = document.getElementById("flagImage");

  // slider event listener
  slider.addEventListener("input", function () {
    const sliderValue = this.value;
    const imageSize = sliderValue * 5;

    flagImage.style.width = imageSize + "px";
  });
});
