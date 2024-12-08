window.onload = () => {
  const image = document.getElementById("hover-image");
  image.addEventListener("mouseover", () => {
    image.src = "images/Questmaster2.png";
  });
  image.addEventListener("mouseout", () => {
    image.src = "images/Questmaster.png";
  });
};
