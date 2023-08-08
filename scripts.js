// Primær JavaScript-funktionalitet
document.addEventListener("DOMContentLoaded", function() {
  // Din grundlæggende JavaScript-funktionalitet her
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function slideTo(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;
  }

  setInterval(() => {
    const nextSlide = (currentSlide + 1) % slides.length;
    slideTo(nextSlide);
  }, 5000);
});
