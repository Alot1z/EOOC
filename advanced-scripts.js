// Avanceret JavaScript-funktionalitet
document.addEventListener("DOMContentLoaded", function() {
  // Din avancerede JavaScript-funktionalitet her
  const parallaxContent = document.querySelector(".parallax-content");
  window.addEventListener("scroll", function() {
    const yOffset = window.pageYOffset;
    parallaxContent.style.transform = `translateY(-${yOffset * 0.5}px)`;
  });
});
