document.addEventListener("DOMContentLoaded", () => {
    const hanging = document.querySelector(".hanging");
  
    // Make the hanging image fall into place
    setTimeout(() => {
      hanging.style.top = "150px"; // Adjust to align with the background
    }, 500); // Delay to simulate the falling effect
  
    // Scroll event to move the hanging image up
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      hanging.style.top = `${150 - scrollY}px`; // Adjust the position based on scroll
    });
  });
  