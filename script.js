document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const next = document.getElementById("nextSlide");
  const prev = document.getElementById("prevSlide");

  let currentIndex = 0;
  const totalSlides = carousel.children.length;

  next.addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      carousel.style.transform = `translateX(-${100 * currentIndex}%)`;
    }
  });

  prev.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      carousel.style.transform = `translateX(-${100 * currentIndex}%)`;
    }
  });
});
