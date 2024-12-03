document.addEventListener("mousemove", (e) => {
  setTimeout(() => {
    const mouseBox = document.getElementById("mouseCircle");
    if (mouseBox) {
      const offsetX = mouseBox.offsetWidth / 2;
      const offsetY = mouseBox.offsetHeight / 2;
      mouseBox.style.left = `${e.pageX - offsetX}px`;
      mouseBox.style.top = `${e.pageY - offsetY}px`;
    }
  }, 40);
});
