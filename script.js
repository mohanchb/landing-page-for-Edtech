document.addEventListener("DOMContentLoaded", function() {
    // Scroll down smoothly when clicking on the "Scroll Down" button
    const scrollBtn = document.querySelector(".scroll-down-btn");
    const featureSection = document.getElementById("learn-more");
  
    scrollBtn.addEventListener("click", function() {
      featureSection.scrollIntoView({ behavior: "smooth" });
    });
  });
  